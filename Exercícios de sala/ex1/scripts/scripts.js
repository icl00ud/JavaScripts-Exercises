function calcFatorial(){
    var numero = fatorial.numero.value;
    
    for(var fat = 1; numero > 1; numero--){     
      fat = fat * numero;
    }
    window.alert(fat);
}

