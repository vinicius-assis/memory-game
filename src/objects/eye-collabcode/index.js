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
        cursor: pointer;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`)

    $input.getAttribute("type")  === "text" 
      ? $input.setAttribute("type", "password") 
      : $input.setAttribute("type", "text")
  }

  module.render = ({attrFor = ""}) => {
    module._style();

    return `
      <label
        for="${attrFor}"
        class="eye-collabcode"
        onClick="eyeCollabCode.handleClick.bind(this)()">
        Mostrar Senha
      </label>
    `
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})()