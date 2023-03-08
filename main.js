const lista = document.querySelector("ul");
const botao = document.querySelector(".botao-lista");
const fechar = document.querySelector(".botao-fechar");

botao.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
  fechar.setAttribute("data-lista", "mostrar");
});

fechar.addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
  fechar.setAttribute("data-lista", "esconder");
});