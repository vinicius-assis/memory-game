const logForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .label-form {
        width: 100%;
        color: #3a4042;
        opacity: 0.5;
        font-size: 16px;
        text-transform: capitalize;
      }

      .input-form {
        width: 100%;
        color: #000;
        margin-top: 15px;
        padding-left: 5px;
        padding-bottom: 10px;
        border-bottom: 2.5px solid #ddd;
        text-transform: capitalize;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Comfortaa', sans-serif;
      }
    `



    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (type = 'text', name = 'nome') => {
    module._style();

    return `
      <label class="label-form" for="${name}">${name}</label>
      <input class="input-form" type="${type}" placeholder="${name}">
    `
  }

  return {
    render: module.render
  }

})();