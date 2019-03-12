(function() {
  const $root = document.querySelector('#root');

  const $loginButton = flatButton.render('Login');

  $root.insertAdjacentHTML("beforeend", $loginButton);
})()