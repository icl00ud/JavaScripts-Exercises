function calcMedias() {

    var salarios_naoFormatado = [ex7.salario1.value, ex7.salario2.value, ex7.salario3.value];
    var filhos_naoFormatado = [ex7.filhos1.value, ex7.filhos2.value, ex7.filhos3.value];
    var cidade = ex7.cidade.value;
    var habitantes = ['Habitante 1', 'Habitante 2', 'Habitante 3'];

    var salarios = [parseInt(salarios_naoFormatado[0]), parseInt(salarios_naoFormatado[1]), parseInt(salarios_naoFormatado[2])];
    var filhos = [parseInt(filhos_naoFormatado[0]), parseInt(filhos_naoFormatado[1]), parseInt(filhos_naoFormatado[2])];

    //Escreve no console os dados
    console.log('Os salários são: ' + salarios);
    console.log('Os filhos são: ' + filhos);
    console.log('A cidade é: ' + cidade);
    //calculo das medias
    var mediaSalario = ((salarios[0] + salarios[1] + salarios[2]) / salarios.length);
    var mediaFilhos = ((filhos[0] + filhos[1] + filhos[2]) / filhos.length);
    var maiorSalario = 5;
    var habMaiorSalario;

    //Calcula o maior salario e armazena junto com quem tem o maior salario
    for (let i = 0; i <= salarios.length; i++) {
        if (salarios[i] > maiorSalario) {
            maiorSalario = salarios[i];
            habMaiorSalario = habitantes[i];
        }
    }

    //Calcula o percentual de pessoas com salario menor que R$150,00
    var pessoaSalarioMenor_150 = 0;
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] < 150) {
            //armazena a quantidade de pessoas com salario menor que R$150,00
            pessoaSalarioMenor_150 = pessoaSalarioMenor_150 + 1;
        }
    }
    //Calcula a porcentagem de pessoas com salário inferior a R$150,00 em relação ao numero de habitantes
    var percent_pessoaSalarioMenor_150 = ((pessoaSalarioMenor_150 / habitantes.length) * 100).toFixed(0);

    //Variável de opção
    var opcao = prompt("Quer saber a média de salário de " + cidade + "?");
    while (opcao != 's' && opcao != 'sim' && opcao != 'Sim' && opcao != 'S') {
        alert("Informe uma opção correta! (s, S, sim ou Sim");
        var opcao = prompt("Quer saber a média de salário de " + cidade + "?");
    }
    //
    if (opcao == 'S' || opcao == 's' || opcao == 'Sim' || opcao == 'sim') {
        document.write('A <b>média de salário</b> da população da cidade <b>' + cidade + '</b> é de: <b>R$' + mediaSalario + '</b>');
        document.write('<br>');
        if ((prompt('Deseja saber a média do número de filhos?')) == 's' || 'S' || 'Sim' || 'sim') {
            document.write('A <b>média</b> do número de <b>filhos</b> é: <b>' + mediaFilhos + '</b>');
            document.write('<br>');
            if ((prompt('Deseja saber o maior salário entre os habitantes?')) == 's' || 'S' || 'Sim' || 'sim') {
                document.write('O <b>maior salário</b> é do <b>' + habMaiorSalario + '</b>, com <b>R$' + maiorSalario + '</b>.');
                document.write('<br>');
                if ((prompt('Deseja saber o percentual de pessoas com salário menor que R$ 150,00?')) == 's' || 'S' || 'Sim' || 'sim') {
                    document.write('O <b>percentual</b> de pessoas com <b>salário menor</b> que <b>R$150,00</b> é de <b>' + percent_pessoaSalarioMenor_150 + '%</b>. Totalizando <b>' + pessoaSalarioMenor_150 + '</b> pessoas <b>abaixo</b> de <b>R$150,00</b>.');
                    document.write('<br>');
                }
            }
        }
    } else {
        console.log('Fim');
    }
}