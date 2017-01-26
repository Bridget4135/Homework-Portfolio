$( document ).ready(function() {

	$(".readmore a").click(expandMore);

	function expandMore(event){
		event.preventDefault();

		$("#show-this-on-click").slideDown();

		$(".readmore").hide();

		$(".readless").show();
	}

});

$( document ).ready(function() {

	$(".readless a").click(showLess);

	function showLess(event){
		event.preventDefault();

		$("#show-this-on-click").slideUp();

		$(".readless").hide();

		$(".readmore").show();
	}

});

$( document ).ready(function() {

	$(".learnmore").click(expandMore);

	function expandMore(event){
		event.preventDefault();
		
		$("#learnmoretext").slideDown();

		$(".learnmore").hide();
	}

});