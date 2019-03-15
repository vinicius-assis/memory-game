(function() {
  const $root = document.querySelector('#root');

  const $singupButton = flatButton.render('Singup', true);
  const $loginButton = flatButton.render('Login');
  const $gueioLogo = gueioLogo.render();
  const $headerTitle = headerCollab.render('Vinícius', $gueioLogo);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $headerTitle);
})()