const recoverPassword = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-login > .recover-password {
        width: 100%;
        display: inline-block;
        text-align: end;
        color: #3a4042;
        font-size: 14px;
        opacity: 0.73;
        margin-top: 43px;
        margin-bottom: 113px;
        text-decoration: none;
        cursor: pointer;
      }
    `

    $head.insertAdjacentElement("beforeend", $style);
  }

  module.render = ({content = "Forget password?", href}) => {
    module._style();

    return `
      <a href="${href}" class="recover-password">${content}</a>
    `
  }

  return {
    render: module.render
  }
})();