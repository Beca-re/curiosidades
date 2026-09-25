```javascript
const botao = document.getElementById("botao");
const mensagem = document.querySelector(".mensagem");
const contador = document.getElementById("contador");

let numero = 0;

const curiosidades = [
    "📖 Anne with an E é inspirada no livro Anne de Green Gables, escrito por Lucy Maud Montgomery.",

    "🌸 A personagem principal se chama Anne Shirley e é conhecida por sua imaginação e personalidade marcante.",

    "🏡 A história se passa principalmente em Avonlea, uma comunidade fictícia localizada na Ilha do Príncipe Eduardo, no Canadá.",

    "💜 A série aborda temas como amizade, família, identidade, preconceito e a importância de aceitar as diferenças.",

    "📚 O primeiro livro de Anne de Green Gables foi publicado em 1908.",

    "🎬 Anne with an E foi lançada em 2017 e teve três temporadas.",

    "✨ Anne é conhecida por sua grande imaginação e por transformar situações do cotidiano em aventuras.",

    "🌿 A história de Anne foi criada pela escritora canadense Lucy Maud Montgomery."
];

function mostrarCuriosidade() {

    numero++;

    if (numero > curiosidades.length) {
        numero = 1;
    }

    mensagem.textContent = curiosidades[numero - 1];

    contador.textContent = numero;
}

botao.addEventListener("click", mostrarCuriosidade);
```
