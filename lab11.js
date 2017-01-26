
//Assign var for celcius temp input
// Run function to convert input to fareignheight



$('#submit').click(convert);

  function convert(){
  	var temp_celcius = $('#temp_celsius').val();
  	var f = temp_celcius * 9 / 5 + 32;
  	var temp_celcius = parseInt(f);

   $('#output').text(f)

// change background image according to weather


//conditionals 

if(f >= 20){
	$("body").attr("class",".verycold");
		
} else if (f >=40) {
	$("body").attr("class",".cold");
	
} else if (f >= 60) {
	$("body").attr("class",".warm");	
 
} else if (f ) {
	$("body").attr("class",".veryhot");
}



};


console.log("hello");