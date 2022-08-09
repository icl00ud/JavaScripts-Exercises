var items = [];

document.querySelector('input[type=submit]')
    .addEventListener('click', () => {
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var valorProduto = document.querySelector('input[name=valor_produto]');

        items.push({
            nome: nomeProduto.value,
            valor: valorProduto.value
        });

        /* 
        <div class="produto-single">
            <div class="produto w50">RedBull</div>
            <div class="preco w50">R$20,00</div>
        </div><!--produto-single-->
        */

        var listaProdutos = document.querySelector('.produtos');
        var soma = 0;
        listaProdutos.innerHTML = "";
        items.map((val) => {
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML += `
        <div class="produto-single">
            <div class="produto w50">` + val.nome + `</div>
            <div class="preco w50">` + val.valor + `</div>
        </div><!--produto-single-->
        `;
        })
        soma = soma.toFixed(2);
        nomeProduto.value = "";
        valorProduto.value = "";

        var elementoSoma = document.querySelector('.soma-produto h2');
        elementoSoma.innerHTML = 'Total da compra R$' + soma;
    });

document.querySelector('button[name=reset]')
.addEventListener('click', ()=>{
    items = [];
    document.querySelector('.produtos').innerHTML = "";
    document.querySelector('.soma-produto h2').innerHTML = "Total da compra: R$0";   
})