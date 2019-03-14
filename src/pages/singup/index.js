(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup', true);
  const $loginButton = flatButton.render('Login')

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
})()