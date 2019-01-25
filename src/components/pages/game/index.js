const $root = document.querySelector("#root");

const cardCollab = {
  src: "icon-collabcode",
  alt: "Gueio Mascote da CollabCode"
};

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

const $cardsWrapper = createCardsWrapper();
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));

$root.insertAdjacentElement("beforeend", $cardsWrapper);
