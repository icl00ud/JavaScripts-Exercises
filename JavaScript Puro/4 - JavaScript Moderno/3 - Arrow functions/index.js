//Arrow functions

let func = (texto, parametro) => {
    parametro(texto);
}

func('Simmm', (texto) => {
    console.log(texto);
});