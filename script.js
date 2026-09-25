```javascript
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");
const contador = document.querySelector("#contador");

let numeroCuriosidade = 0;

const curiosidades = [
    "📖 Anne with an E é inspirada no livro Anne de Green Gables, escrito por Lucy Maud Montgomery.",

    "🌸 A personagem principal se chama Anne Shirley e é conhecida por sua imaginação e personalidade marcante.",

    "🏡 A história se passa principalmente em Avonlea, uma comunidade fictícia localizada na Ilha do Príncipe Eduardo, no Canadá.",

    "💜 A série aborda temas como amizade, família, identidade, preconceito e a importância de aceitar as diferenças.",

    "📚 O primeiro livro de Anne de Green Gables foi publicado em 1908.",

    "🎬 A série Anne with an E foi lançada em 2017 e teve três temporadas.",

    "✨ Anne é conhecida por gostar de palavras difíceis e por transformar situações do cotidiano em grandes aventuras através da imaginação.",

    "🌿 A história original de Anne foi criada pela escritora canadense Lucy Maud Montgomery."
];

function mostrarCuriosidade() {

    mensagem.classList.remove("animar");

    numeroCuriosidade++;

    if (numeroCuriosidade > curiosidades.length) {
        numeroCuriosidade = 1;
    }

    mensagem.textContent = curiosidades[numeroCuriosidade - 1];

    contador.textContent = numeroCuriosidade;

    void mensagem.offsetWidth;

    mensagem.classList.add("animar");
}

botao.addEventListener("click", mostrarCuriosidade);
```
