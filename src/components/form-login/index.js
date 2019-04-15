const formLogin = (function() {
  const module ={};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }
    `

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $loginLabel = labelCollab.render('Username ou e-mail');
    const $loginInput = inputCollab.render({
      placeholder: 'example@email.com.br',
      type: 'email'});

    const $passwordLabel = labelCollab.render('Password');
    const $passwordInput = inputCollab.render({
      placeholder: 'Seu Password', 
      type: 'password'});

    const $recoverPassword = recoverPassword.render();

    const $collabButton = collabButton.render('Login');

    return `
      ${$loginLabel}
      ${$loginInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$recoverPassword}

      ${$collabButton}

    `
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST">${module._children()}
    </form>`
  }

  return {
    render: module.render
  }

})();