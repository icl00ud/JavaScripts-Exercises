function calcPorcentagem(){
    var numEleitores = parseInt(ex3.numEleitores.value);
    var numBranco = parseInt(ex3.numBranco.value);
    var numNulo = parseInt(ex3.numNulo.value);
    var numValidos = parseInt(ex3.numValidos.value);
    var somaVotos = parseInt(numBranco+numNulo+numValidos);

    if (numEleitores == somaVotos) {
        var numBranco_per = (numBranco/numEleitores)*100;
        var numNulo_per = (numNulo/numEleitores)*100;
        var numValidos_per = (numValidos/numEleitores)*100;
        document.write("O percentual de votos em branco é "+numBranco_per+"%");
        document.write('<br>');
        document.write("O percentual de votos nulos é "+numNulo_per+"%");
        document.write('<br>');
        document.write("O percentual de votos válidos é "+numValidos_per+"%");
    }else{
        alert("O número de eleitores precisa ser igual a soma dos votos");
    }
}