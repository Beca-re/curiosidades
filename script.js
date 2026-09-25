```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(135deg, #e9d5ff, #c084fc, #7e22ce);

    color: #3b0764;
}

.container {
    width: 90%;
    max-width: 650px;

    background-color: white;

    padding: 40px;

    text-align: center;

    border-radius: 25px;

    box-shadow: 0 10px 30px rgba(59, 7, 100, 0.3);
}

.icone {
    font-size: 50px;
}

h1 {
    color: #7e22ce;
    font-size: 40px;
    margin: 10px 0;
}

h2 {
    color: #6b21a8;
    margin-bottom: 20px;
}

.introducao {
    margin-bottom: 20px;
}

.caixa-curiosidade {
    background-color: #f3e8ff;

    border-left: 6px solid #9333ea;

    padding: 25px;

    border-radius: 10px;

    margin-bottom: 25px;

    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.mensagem {
    color: #4c1d95;
    font-size: 18px;
    line-height: 1.5;
}

.botao {
    background-color: #7e22ce;

    color: white;

    border: none;

    padding: 15px 25px;

    border-radius: 10px;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
}

.botao:hover {
    background-color: #5b21b6;
}

.contador {
    margin-top: 20px;
    color: #6b21a8;
}

#contador {
    font-weight: bold;
    color: #7e22ce;
}
```
