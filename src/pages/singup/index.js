(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup', true);
  const $loginButton = flatButton.render('Login');

  
  const $gueioLogo = gueioLogo.render();
  const $titleCollabcode = titleCollabcode.render();
  const $logoWrapper = logoWrapper.render($gueioLogo, $titleCollabcode);

  const $formSingUp = formSingUp.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSingUp);
})()