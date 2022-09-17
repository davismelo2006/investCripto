// carrossel da seção de depoimentos

// animação do dropout da seção de dúvidas
const all_duvidas = document.querySelectorAll(".duvida__container");

all_duvidas.forEach((el) => {
  el.addEventListener("click", () => {
    titulo = el.querySelector(".duvida__titulo");
    conteudo = el.querySelector(".duvida__conteudo");

    if (titulo.className.includes("selecionado")) {
      titulo.classList.remove("selecionado");
      conteudo.classList.remove("active");
    } else {
      titulo.classList.add("selecionado");
      conteudo.classList.add("active");
    }
  });
});
