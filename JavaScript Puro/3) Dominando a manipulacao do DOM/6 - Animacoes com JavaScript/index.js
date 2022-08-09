var box = document.querySelectorAll('.box')[0];
/*
setTimeout(()=>{
    box.classList.add('aLeft');
},1000)
*/

box.addEventListener('click', () => {
    box.classList.add('aLeft');
})