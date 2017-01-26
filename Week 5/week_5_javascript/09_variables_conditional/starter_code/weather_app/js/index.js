//code to convert


$('#submit').click(convert);

  function convert(){
  	var temp_celcius = $('#temp_celsius').val();
  	var f = temp_celcius * 9 / 5 + 32;

   $('#output').text(f);


  }




