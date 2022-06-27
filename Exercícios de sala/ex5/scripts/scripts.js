function sortNumbers(){
    var numeros = [1, 2, 3, 4, 5, 12, 13, 14, 15, 16];
    document.write('Os números do array são: '+numeros+'.');
    document.write('<br>');
    document.write('<br>');
    document.write('E os números no intervalo [10, 20] são:');
    document.write('<br>');
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            document.write(numeros[i]+' ');
        }
    }
}