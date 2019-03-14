(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup', true);
  const $loginButton = flatButton.render('Login')
  const $headerTitle = headerCollab.render('Vinícius');

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $headerTitle);
})()