const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardCollab));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardC));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardJs));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardHead));
$cardsWrapper.insertAdjacentHTML(
  "beforeend",
  createMemoryCard(...cardCelPhone)
);
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardJava));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardPhp));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(...cardWoman));

$root.insertAdjacentElement("beforeend", $cardsWrapper);
