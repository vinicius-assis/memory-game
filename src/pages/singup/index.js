(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup');
  const $loginButton = flatButton.render('Login', '-active')

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
})()