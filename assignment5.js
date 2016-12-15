//we need an input element, id, value

//we need a button 

$(document).ready(function() {
	console.log("ready!")
	// on button click, run a function to change the background
	//on the input

	function changeBackground(event) {

		//console.log(event);
		event.preventDefault();

		// define functiuon that runs when button clicked

			//get the city name input from the input element

		var cityInput= $("#city-type").val();

		console.log(cityInput);

			//San Fran

			//if cityInput is SF, San Francisco, or Bay Area


		if (cityInput == "New York" || cityInput =="New York City" || cityInput == "NYC") {
			$("body").css("background","url(nyc.jpg)");
		} 
		else if (cityInput == "San Francisco" || cityInput =="SF" || cityInput == "Bay Area") {
			$("body").css("background", "url(sf.jpg)");	
		}

		else if (cityInput == "Los Angeles" || cityInput =="LA" || cityInput == "LAX") {
			$("body").css("background","url(la.jpg)");	
		}
		else if (cityInput == "Austin" || cityInput =="ATX") {
			$("body").css("background","url(austin.jpg)");

		}
		else if (cityInput == "Sydney" || cityInput =="SYD") {
			$("body").css("background","url(sydney.jpg)");
		}


	}

	$("#submit-btn").click(changeBackground);

});

