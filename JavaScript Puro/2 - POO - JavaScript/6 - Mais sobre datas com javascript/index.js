var date = new Date('04/20/2000');
var date2 = new Date('04/22/2000');
var diference = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24);
console.log(diference);