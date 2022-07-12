function mudarCorBG() {
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

	document.body.style.background = bgColor;
}

function whiteBG(){
	var x = 256;
	var bgColor = "rgb(" + x + "," + x + "," + x + ")";
	document.body.style.background = bgColor;
}

function email() {
	var optionSelect = ex8.select.value;
	console.log(optionSelect);
}