$(document).ready(init);

function init() {
	//$(".pushy").remove();
	$(".image").mouseover(makeOver);
	$(".image").mouseout(makeOutOver);
	//$(".pushy").removeAttr("background");
	//$(".pushy").attr("background-image","url(../images/vancouver1.jpg)");
	
}
function makeOver() {
	$(".image").fadeIn(1000);
}

function makeOutOver() {
	$(".image").fadeOut(1000);
}