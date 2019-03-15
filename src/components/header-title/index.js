const headerCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');
    $style.textContent = `
      .header-wrap {
        background-color: #fff;
        width: 252px;
        height: 252px;
        display: flex; 
        justify-content: space-around;
        align-items: center;
        border-radius: 50%;
        position: relative;
        left: 50%;
        transform: translateX(-50%) translateY(-30%);
      }

      .header-title {
        color: #f25a70;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: bold;
        line-height: 27px;
        letter-spacing: 0.58px;
        position: absolute;
        margin-top: 38px;
        bottom: 0;
        transform: translateY(200%);
      }
  `

  $head.insertAdjacentElement('beforeend', $style);
}

  module.render = (content, img) => {
    module._style();

    return `
      <section class="header-wrap">
        ${img}
        <h2 class="header-title">${content}</h2>
      </section>
    `
  }

  return {
    render: module.render
  }

})();