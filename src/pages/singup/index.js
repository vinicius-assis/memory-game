(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup', true);
  const $loginButton = flatButton.render('Login');

  const $emailForm = logForm.render('email', 'email');
  const $formWrapper = formWrapper.render($emailForm);
  
  const $gueioLogo = gueioLogo.render();
  const $titleCollabcode = titleCollabcode.render();
  const $logoWrapper = logoWrapper.render($gueioLogo, $titleCollabcode);
  

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formWrapper);

})()