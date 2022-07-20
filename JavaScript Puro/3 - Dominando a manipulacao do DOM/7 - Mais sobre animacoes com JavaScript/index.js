var span = document.querySelector('.conteudo span');
span.addEventListener('click', () => {
    var conteudo = document.querySelector('.conteudo p');

    if (conteudo.classList.contains('mostrar')) {
        span.innerHTML = 'Ver mais!';
        conteudo.classList.remove('mostrar');
        console.log('escondeu');
    } else {
        conteudo.classList.add('mostrar');
        span.innerHTML = 'Ocultar';
        console.log('mostra');
    }

});