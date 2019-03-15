const gueioLogo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .collab-icon {
        width: 170px;
        height: 175px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (src = 'img/icon-collabcode.png', alt = 'Gueio mascote da collabcode') => {
    module._style();

    return `
      <img src="${src}" alt="${alt}">
    `
  }

  return {
    render: module.render
  }
})();