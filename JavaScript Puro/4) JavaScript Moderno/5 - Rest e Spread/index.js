/*
            var nomes = [
                {
                nome: 'joao'
                },
                {
                nome: 'xinga'
                }
            ]

            const objetos = [...nomes,{
                nome: 'Israel'
            }];
*/

function teste(...nomes) {
    console.log(nomes);
}

teste([1, 2, 3, 4, 5, 6]);