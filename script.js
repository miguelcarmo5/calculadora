const lampImage = document.getElementById('lamp-image');
const toggleButton = document.getElementById('toggle-button');

const lampOffSrc = "components/imagens/lampadadesl.png"; // Lâmpada desligada
const lampOnSrc = "components/imagens/lampada.png";   // Lâmpada ligada

lampImage.src = lampOffSrc; 
lampImage.alt = "Lâmpada Desligada";

toggleButton.addEventListener('click', () => {
    if (lampImage.src.endsWith(lampOnSrc)) { 
        lampImage.src = lampOffSrc;
        lampImage.alt = "Lâmpada Desligada"; 
    } else {
        lampImage.src = lampOnSrc;
        lampImage.alt = "Lâmpada Ligada"; 
    }
});
