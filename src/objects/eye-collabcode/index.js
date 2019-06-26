const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head")
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display: block;
        width: 24px;
        height: 15px;
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        background-position: center;
        text-indent: 99999px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = () => {
    module._style();
    return `
      <label class="eye-collabcode">Mostrar Senha</label>
    `
  };

  return {
    render: module.render
  }
})()