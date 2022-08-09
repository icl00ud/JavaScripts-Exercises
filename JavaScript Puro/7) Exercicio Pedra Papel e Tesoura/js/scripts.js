 var elementos = document.querySelectorAll('.player-options div > img');
 var enemyOptions = document.querySelectorAll('.enemy-options div');
 var playerOpt = "";
 var enemyOpt = "";

 function resetEnemy() {
     for (let i = 0; i < enemyOptions.length; i++) {
         enemyOptions[i].childNodes[0].style.opacity = 0.3;
     }
 }

 function enemyPlay() {
     let random = Math.floor(Math.random() * 3);
     resetEnemy();
     for (let i = 0; i < enemyOptions.length; i++) {
         if (i == random) {
             enemyOptions[i].childNodes[0].style.opacity = 1;
             enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
         }
     }
     victoryValidate();
 }

 function resetOpacityPlayer() {
     for (let i = 0; i < elementos.length; i++) {
         elementos[i].style.opacity = 0.3;
     }
 }

 for (let i = 0; i < elementos.length; i++) {
     elementos[i].addEventListener('click', (t) => {
         resetOpacityPlayer();
         t.target.style.opacity = 1;
         playerOpt = t.target.getAttribute('opt');
         enemyPlay();
         //alert(playerOpt);
     })
 }

 function victoryValidate() {
     let winner = document.querySelector('.winner');


     if (playerOpt == "paper") {
         if (enemyOpt == "paper") {
             //empate
             winner.innerHTML = "O jogo empatou!"
         } else if (enemyOpt == "scissor") {
             //inimigo ganha
             winner.innerHTML = "O inimigo venceu!"
         } else if (enemyOpt == "rock") {
             //player ganha
             winner.innerHTML = "O player venceu!"
         }
     }

     if (playerOpt == "rock") {
         if (enemyOpt == "paper") {
             //inimigo ganha
             winner.innerHTML = "O inimigo venceu!"
         } else if (enemyOpt == "scissor") {
             //player ganha
             winner.innerHTML = "O player venceu!"
         } else if (enemyOpt == "rock") {
             //empate
             winner.innerHTML = "O jogo empatou!"
         }
     }

     if (playerOpt == "scissor") {
         if (enemyOpt == "paper") {
             //player ganha
             winner.innerHTML = "O player venceu!"
         } else if (enemyOpt == "scissor") {
             //empate
             winner.innerHTML = "O jogo empatou!"
         } else if (enemyOpt == "rock") {
             //inimigo ganha
             winner.innerHTML = "O inimigo venceu!"
         }
     }
 }