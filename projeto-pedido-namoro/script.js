const texto = document.querySelector('.texto')
const intervalo = 200;
const painelPrincipais = document.getElementById('texto')

var movimentos = 0;
        
function fuja() {
    var botaoNao = document.getElementById('nao');

    var larguraDiv = painelPrincipais.offsetWidth + 400;
    var alturaDiv = painelPrincipais.offsetHeight + 400;

    var maxX = larguraDiv - botaoNao.offsetWidth;
    var maxY = alturaDiv - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";

    movimentos++;

    if (movimentos >= 7) {
        botaoNao.style.display = "none";
    }
}

function teAmo() {
    var botaoSim = document.getElementById('sim');
    alert('YUP!!!!! Te adoro, meu bem! Dedico essa musica para você.');
}

document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('texto');
    const paragraphs = textContainer.querySelectorAll('p, h2');
    const speed = 25; // Velocidade de digitação em milissegundos

    function typeText(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1, callback), speed);
        } else {
            callback();
        }
    }

    function startTyping() {
        let currentElement = 0;

        // Limpar o conteúdo de todos os elementos antes de iniciar a animação
        paragraphs.forEach(element => {
            element.dataset.text = element.innerHTML;
            element.innerHTML = '';
        });

        function typeNext() {
            if (currentElement < paragraphs.length) {
                const element = paragraphs[currentElement];
                const text = element.dataset.text;
                element.classList.add('typing');
                typeText(element, text, 0, () => {
                    element.classList.remove('typing');
                    currentElement++;
                    typeNext();
                });
            }
        }

        typeNext();
    }

    startTyping();
});