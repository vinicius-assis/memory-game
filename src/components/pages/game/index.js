const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const cardJs = {
  className: "-active",
  src: "icon-js",
  alt: "Livro da Linguagem JavaScript"
};

const cardC = {
  className: "-active",
  src: "icon-c",
  alt: "Livro da Linguagem C++"
};
const cardHead = {
  className: "-active",
  src: "icon-cabeca",
  alt: "Card com a imagem de uma cabeça"
};
const cardCelPhone = {
  className: "-active",
  src: "icon-celular",
  alt: "Card com a imagem de um celular"
};
const cardJava = {
  className: "-active",
  src: "icon-java",
  alt: "Livro da Linguagem JAVA"
};
const cardPhp = {
  className: "-active",
  src: "icon-php",
  alt: "Livro da Linguagem PHP"
};
const cardResponsive = {
  className: "-active",
  src: "icon-responsivo",
  alt: "Imagem referente a responsividade"
};
const cardWoman = {
  className: "-active",
  src: "icon-woman",
  alt: "Imagem de uma mulher desenvolvedora"
};

$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));

$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $cards = document.querySelectorAll(".memory-card");

$cards.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("-active");
  });
});
