const createMemoryCard = (nameClass, src, alt) => `
  <article class="memory-card ${nameClass}">
    <img 
      src='img/${src}.png'
      alt='${alt}' 
      class='icon'
    />
  </article>
`;

const cardCollab = ["", "icon-collabcode", "Gueio Mascote da CollabCode"];
const cardJs = ["-active", "icon-js", "Livro da Linguagem JavaScript"];
const cardC = ["-active", "icon-c", "Livro da Linguagem C++"];
const cardHead = ["-active", "icon-cabeca", "Card com a imagem de uma cabeça"];
const cardCelPhone = [
  "-active",
  "icon-celular",
  "Card com a imagem de um celular"
];
const cardJava = ["-active", "icon-java", "Livro da Linguagem JAVA"];
const cardPhp = ["-active", "icon-php", "Livro da Linguagem PHP"];
const cardResponsive = [
  "-active",
  "icon-responsivo",
  "Imagem referente a responsividade"
];
const cardWoman = [
  "-active",
  "icon-woman",
  "Imagem de uma mulher desenvolvedora"
];

const $cards = document.querySelectorAll(".memory-card");
$cards.forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("-active"));
});
