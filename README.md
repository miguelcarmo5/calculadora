# Projeto Lâmpada Interativa

Este é um projeto simples de demonstração de uma lâmpada que pode ser ligada e desligada com um clique de botão, utilizando HTML e JavaScript puro para manipulação do DOM (Document Object Model). O objetivo é praticar conceitos fundamentais de desenvolvimento web interativo.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estrutura da página web.

* **JavaScript:** Para a lógica de interatividade (ligar/desligar a lâmpada).

## 📁 Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é a seguinte:
capacitacao_em_js/
├── index.html
├── script.js
└── components/
└── imagens/
├── lampadadesl.png
└── lampadalig.png
* `index.html`: O arquivo principal HTML que contém a estrutura da página.

* `script.js`: O arquivo JavaScript que implementa a lógica de ligar/desligar a lâmpada.

* `components/imagens/`: Pasta que armazena as imagens da lâmpada nos estados "desligada" (`lampadadesl.png`) e "ligada" (`lampadalig.png`).

## ✨ Como Rodar o Projeto

É muito simples! Siga estes passos:

1. **Clone o repositório** (se estiver no GitHub) ou **faça o download** dos arquivos do projeto.

2. Certifique-se de que a estrutura de pastas e os nomes dos arquivos (especialmente as imagens e o `script.js`) estejam corretos, conforme descrito acima.

3. **Abra o arquivo `index.html`** no seu navegador web preferido (Google Chrome, Firefox, Edge, etc.).

A página será carregada, exibindo a imagem da lâmpada desligada e um botão. Ao clicar no botão, a imagem da lâmpada alternará entre os estados 'ligado' e 'desligado'.

## 💡 Lógica do Código (JavaScript)

O arquivo `script.js` contém a inteligência do projeto:

1. **Seleção de Elementos:**

   * `document.getElementById('lamp-image')`: Obtém uma referência à tag `<img>` da lâmpada, usando seu `id`.

   * `document.getElementById('toggle-button')`: Obtém uma referência à tag `<button>`, usando seu `id`.

2. **Caminhos das Imagens:**

   * `const lampOffSrc = "components/imagens/lampadadesl.png";`: Define o caminho para a imagem da lâmpada desligada.

   * `const lampOnSrc = "components/imagens/lampadalig.png";`: Define o caminho para a imagem da lâmpada ligada.

3. **Evento de Clique:**

   * `toggleButton.addEventListener('click', () => { ... });`: Adiciona um "ouvinte" ao botão. Quando o botão é clicado, a função (uma `Arrow Function`) é executada.

4. **Lógica Condicional (`if/else`):**

   * Dentro da função do clique, `if (lampImage.src.endsWith(lampOnSrc))` verifica se a imagem atualmente exibida é a da lâmpada ligada.
**Autor**
[Miguel Carmo de Aquino]
     * Se sim (lâmpada está ligada), ele troca o `src` da imagem para `lampOffSrc` (desliga a lâmpada).

     * Se não (lâmpada está desligada), ele troca o `src` da imagem para `lampOnSrc` (liga a lâmpada).

   * O atributo `alt` da imagem também é atualizado para melhorar a acessibilidade.

Este projeto demonstra a manipulação básica do DOM, o uso de eventos e estruturas condicionais, conceitos essenciais para qualquer desenvolvedor front-end.
