//we need an input element, id, value

//we need a button 

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
		$("body").attr("class","NYC");
	} 
	else if (cityInput == "San Francisco" || cityInput =="SF" || cityInput == "Bay Area") {
		$("body").attr("class","sf");
		
	}
	else if (cityInput == "Los Angeles" || cityInput =="LA" || cityInput == "LAX") {
		$("body").attr("class","la");	
	 
	}
	else if (cityInput == "Austin" || cityInput =="ATX") {
		$("body").attr("class","austin");

	}
	else if (cityInput == "Sydney" || cityInput =="SYD") {
		$("body").attr("class","sydney");
	}

}
$("#submit-btn").click(changeBackground);
