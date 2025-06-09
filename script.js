const btnMenu = document.getElementById("btnMenu");
const sidebarMenu = document.getElementById("sidebarMenu");
const btnClose = document.getElementById("btnClose");

btnMenu.addEventListener("click", () => {
  sidebarMenu.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
  sidebarMenu.classList.remove("active");
});

let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 8000);

const containerCard = document.querySelector(".container-card-cardapio");
const buscaInput = document.querySelector("#inputBuscar");
let cardapioData = [];

function renderCardapio(data) {
  containerCard.innerHTML = "";

  data.forEach((item) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card-cardapio");
    divCard.id = `card${item.id}`;
    divCard.innerHTML = `
        <img src=${item.img} />
        <strong>${item.nome}</strong>
        <p>${item.descricao}</p>
        <small>R$: ${item.valor}</small>
    `;
    containerCard.appendChild(divCard);
  });
}

function loadCardapio() {
  fetch("./cardapio.json")
    .then((response) => response.json())
    .then((data) => {
      cardapioData = data;
      renderCardapio(cardapioData);
    })
    .catch((error) => console.log("Erro ao carregar JSON", error));
}

buscaInput.oninput = function () {
  const termo = this.value.toLowerCase();
  const resultado = cardapioData.filter((item) =>
    item.nome.toLowerCase().includes(termo)
  );
  renderCardapio(resultado);
};

loadCardapio();
