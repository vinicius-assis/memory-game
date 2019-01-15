const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $JsCard = document.createElement("article");
const $icon = `
  <img 
  src='img/icon-collabcode.png' 
  alt='Gueio mascote da CollabCode' 
  class='icon'/>
`;

const $jsIcon = `
  <img 
  src="img/-icon-js.png" 
  alt="Gueio mascote da CollabCode" 
  class="icon" />
`;

$JsCard.classList.add("memory-card", "-active");

$root.insertBefore($JsCard, null);
$JsCard.insertAdjacentHTML("afterbegin", $jsIcon);

$root.insertBefore($memoryCard, null);
$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
