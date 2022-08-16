/*
to do list

1) colocar span e input type radio dentro de uma div pra preencher toda a linha ✔
2) recuperar o elemento pai da opcao correta ou incorreta e aplicara a cor certa ✔
3) depois de selecionado a resposta deixar o botao desabilitado ✔

*/

function DisableOptions() {
    // função que desabilita as opções de radio após uma ser selecionada
    let els = parentNode.parentNode.querySelectorAll('[type=radio]');
    for (let c = 0; c < els.length; c++) {
        els[c].disabled = true;
    }
}

var elementos = document.querySelectorAll('[type=radio]');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change', (e) => {
        let marcado = e.target.value;
        if (marcado == "correto") {

            //muda o background para verde se for correto
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            //desabilitar os outros radios apos selecionar uma
            DisableOptions();

            console.log("você acertou");
        } else if (marcado == "incorreto") {

            //muda o background para vermelho se for incorreto
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            //desabilitar os outros radios apos selecionar uma
            DisableOptions();

            //se incorreto, mostra a alternativa correta
            let correta = parentNode.parentNode.querySelector('[value=correto]');
            correta.parentNode.style.backgroundColor = 'green';

            console.log("você errou");
        }
    })
}