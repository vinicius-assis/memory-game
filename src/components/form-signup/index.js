const formSingUp = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `


    $head.insertAdjacentElement('beforeend', $style);
  }

  module._children = () => {
    const $emailLabel = labelCollab.render('E-mail');
    const $emailInput = inputCollab.render({
      placeholder:'seuemail@exemplo.com',
      type:'email'});

    const $usernameLabel = labelCollab.render('Username');
    const $usernameInput = inputCollab.render({
      placeholder: 'Username'});

    const $passwordLabel = labelCollab.render('Password');
    const $passwordInput = inputCollab.render({
      placeholder: 'Sua senha',
      type: 'password'});

    const $confirmPasswordLabel = labelCollab.render('Confirme Password');
    const $confirmPasswordInput = inputCollab.render({
      placeholder: 'De novo para não esquecer', 
      type: 'password'});

    const $collabButton = collabButton.render('Submit');
  
    return `
      ${$emailLabel}
      ${$emailInput}

      ${$usernameLabel}
      ${$usernameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$collabButton}

    `
  }

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`
  }

  return {
    render: module.render
  }

})();