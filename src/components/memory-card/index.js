const createMemoryCard = ({ className, src, alt }) => `
  <article class="memory-card ${className}">
    <img 
      src='img/${src}.png'
      alt='${alt}' 
      class='icon'
    />
  </article>
`;

const $cards = document.querySelectorAll(".memory-card");
$cards.forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("-active"));
});
