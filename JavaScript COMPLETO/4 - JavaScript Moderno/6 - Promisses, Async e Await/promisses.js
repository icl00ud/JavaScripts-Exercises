function testes(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            var erro = false;
            if(erro) {
                reject('ERROR');
            }else{
                resolve("A promisse foi resolvida.")
            } 
        }, 2000);
    
    });
}

async function testes2(){
    await testes().then((res)=>{
        alert(res);
    });
    alert('oi');
}

testes2();
