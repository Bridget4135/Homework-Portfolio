index.js

$ ( document ).ready(functon(){

	// when button clicked compare numbers
	//output symbol

function compareNumbers(){
	var first = $("#a").val();
	var second = $("#b").val();

	// compare

	if (first > second) {
		#('#comparison').text(">");
	

} else if (first < second) {
		#('#comparison').text("<");
	
} else if (first == second) {
		#('#comparison').text("=");
	
} else if (first ===second) {
		#('#comparison').text("===");
	


}

	$("submit").click(compareNumbers);
})