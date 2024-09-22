const funcoes = {};

function imc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (peso && altura) {
        const imc = peso / (altura * altura);

        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        resultado.textContent = `Seu IMC é ${imc} (${classificacao})`;
    } else {
        resultado.textContent = 'Erro: não conseguimos calcular o seu IMC';
    }
}

window.addEventListener('load', function() {
    const menu = document.querySelector('.menu-links');
    document.querySelector('#botao-imc').addEventListener('click', imc);
    document.querySelector('.menu-btn').addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    let secaoAtual = 'inicio';
    funcoes.atualizarSecoes = function() {
        // esconder todas as secoes, menos a atual
        for (const s of document.querySelectorAll('.secao')) {
            s.hidden = (s.id != secaoAtual);
        }
    }
    funcoes.mudarSecao = function(id) {
        secaoAtual = id;
        funcoes.atualizarSecoes();
    }
    funcoes.atualizarSecoes(); // temos que rodar isso uma vez para esconder todas as seções menos a inicial
});