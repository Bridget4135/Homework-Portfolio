//Implement the red light using jQuery. Don't forget to add the script tags.
/*
jQuery detects this state of readiness for you. 
Code included inside $( document ).ready() 
will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
*/

//BEST PRACTICE


$('#stopButton').click(stop);
$('#slowButton').click(caution);
$('#goButton').click (go);

function stop() {
	clearLights ();
	$("#stopLight").css('backgroundColor', 'red'); 

	}

function caution() {
	clearLights();
	$("#slowLight").css('backgroundColor', 'yellow');
}

function go() {
	clearLights();
	$("#goLight").css('backgroundColor', 'green');

}

function clearLights(){
	$("#stopLight").css('backgroundColor', 'black')
	$("#slowLight").css('backgroundColor', 'black')
	$("#goLight").css('backgroundColor', 'black')
}

console.log("kafd");

