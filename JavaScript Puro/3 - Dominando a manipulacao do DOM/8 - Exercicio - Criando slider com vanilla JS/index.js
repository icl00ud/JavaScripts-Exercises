var ultimoIndex = 0;

var images = document.querySelectorAll('.container img');

images.forEach((item, index) => {
    document.querySelectorAll('.bullet-single')[index]
        .addEventListener('click', () => {
            let ultimaImagem = document.querySelectorAll('.container img')[ultimoIndex];
            let atualImagem = document.querySelectorAll('.container img')[index];

            //Resetando as bullets e setando a nova com base na imagem

            document.querySelectorAll('.bullet-single')[ultimoIndex]
                .classList.remove('active-bullet');
            document.querySelectorAll('.bullet-single')[index]
                .classList.add('active-bullet');

            ultimaImagem.style.opacity = 0;
            atualImagem.style.opacity = 1;

            ultimoIndex = index;
        })
})