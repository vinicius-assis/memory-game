const collabButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');


    $style.textContent = `
      .collab-btn {
        width: 100%;
        height: 48px;
        background-color: #f25a70;
        color: #fff;
        border-radius: 24px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        cursor: pointer;
      }

      .input-collab + .collab-btn {
        margin-top: 45px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (content) => {
    module._style();
    return `<input class="collab-btn" type="submit" value="${content}" >`
  }

  return {
    render: module.render
  }

})();