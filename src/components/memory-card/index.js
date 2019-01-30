const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `

    .card-group { 
      transition: transform 400ms;
      padding: 5px;
    }

    .card-group > .memory-card.-active {
      transform: rotateY(180deg);
    }

    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      float: left;
      cursor: pointer;
      transition: 0.7s;
    }

    .memory-card.-active {
      background-color: #fff;
    }

    .memory-card.-active .gueio-card {
      display: none; 
    }

    .memory-card .gueio-card {
      width: 100px;
    }

    .memory-card.-active::before {
      position: absolute;
      content: "";
      background-color: #d4d4d4;
      width: 95px;
      height: 95px;
      border-radius: 50%;
    }

    .memory-card > .icon {
      display: none;
    }

    .memory-card.-active > .icon {
      width: 100px;
      height: 100px;
      position: relative;
      margin-bottom: 23px;
      display: block;
      transform: rotateY(180deg);
    }
`;

  $head.insertBefore($style, null);

  return ({ className, src, alt }) => `
    <div class="card-group"> 
      <article class="memory-card">
        <img class="gueio-card"
          src='img/icon-collabcode.png'
          alt='Gueio mascote da CollabCode' 
          class='icon'
        />    
        <img 
          src='img/${src}.png'
          alt='${alt}' 
          class='icon'
        />
      </article>
    </div>
  `;
};
