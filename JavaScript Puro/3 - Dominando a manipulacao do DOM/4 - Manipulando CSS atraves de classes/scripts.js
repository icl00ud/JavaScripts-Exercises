var x = document.getElementsByClassName('box');

for (let i = 0; i < x.length; i++) {
    var y = x[i];

    y.style.width = 100;
    y.style.height = 100;
    y.style.backgroundColor = 'red';
    y.style.marginTop = 50;
}