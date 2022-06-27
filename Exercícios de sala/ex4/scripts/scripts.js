function calcTotalDaCompra(){
    var numMaca = macas.numero.value;

    if (numMaca < 12) {
        var valorMaca = 1.3;
        alert("Total da compra: R$"+(valorMaca*numMaca));
    }else{
        var valorMaca = 1;
        alert("Total da compra: R$"+(valorMaca*numMaca));
    }
}