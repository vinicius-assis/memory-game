const signup = (function() {
  const $root = document.querySelector('#root');

  const $signupButton = flatButton.render('Signup', true);
  const $loginButton = flatButton.render('Login');

  
  const $gueioLogo = gueioLogo.render();
  const $titleCollabcode = titleCollabcode.render();
  const $logoWrapper = logoWrapper.render($gueioLogo, $titleCollabcode);

  const $formSignUp = formSignUp.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignUp);
});