$( document ).ready(function(){
//setting a variable
	var total = 0;
	//when a button is clicked, do math

	function doMath(){
		//debugger;
		var value = $(this).attr('id');
		if (value == "reset"){
				total = 0;
		} 	else
				total = total + parseInt(value);
		}
			$('#result').text(total);
	}

	//when button clicked do math

		$('.doMath').click(doMath);
});





/*

//button 0 zeroes out number
	//get the button via jquery, set the click
	$("#zero").click(zeroClick);

	//function for zero button
	function zeroClick(){
		//make value 0
		total = 0;
		$('#result').text(total);
	}

	$("#add5").click(addFive);

	function addFive(){
		// total <-- total(a number) + 5;
		total = total + 1;
		$('#result').text(total);
	}
});

/*