var w = window.screen.availWidth * window.devicePixelRatio;
var h = window.screen.availHeight * window.devicePixelRatio;

if(w <= 992){
	getElementsbyClass('btn').classList.remove("btn-lg")
}

if(w <= 576){
	getElementsbyClass('btn').classList.add("btn-sm")
}