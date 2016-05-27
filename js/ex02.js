$(document).ready(init);
var ini = 1;
function init() {
	$("#previous").click(previous);
	$("#next").click(next);
	function previous() {

	}

	function next() {
		$(".fadeitem").fadeOut(1000);
		ini = ++ini;
		$(".fadeitem").attr("id", ini);
		alert($(".fadeitem").attr("src"));
		alert($("#"+ini).attr("src"));

	}
		
}
