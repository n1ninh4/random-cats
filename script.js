async function carregarGatinho() {
  const img = document.getElementById("catImage");
  const error = document.getElementById("error");

  try {
    error.textContent = "Carregando... 🐾";

    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await resposta.json();

    img.src = dados[0].url;
    error.textContent = "";

  } catch (err) {
    error.textContent = "Não foi possível carregar o gatinho ";
    console.error(err);
  }
}

// carregar ao abrir
carregarGatinho();