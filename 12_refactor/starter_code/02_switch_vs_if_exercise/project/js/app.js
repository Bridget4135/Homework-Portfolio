// we can simplify here with an array
$(document).ready(function() {
 
var city-type= ["NYC", "SF", "LA", "ATX", "SYD"];


  $('#city-type').append('<option value="NYC">' + "NYC" + '</option>');
  $('#city-type').append('<option value="SF">' + "SF" + '</option>');
  $('#city-type').append('<option value="LA">' + "LA" + '</option>');
  $('#city-type').append('<option value="ATX">' + "ATX" + '</option>');
  $('#city-type').append('<option value="SYD">' + "SYD" + '</option>');
  
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    

    switch(city){
     case 'NYC'
        $('body').attr('class','nyc');
        break
     case 'SF'
       $('body').attr('class','sf');
        break
      case 'LA'
      $('body').attr('class', 'la');
        break
      case
        $('body').attr('class','austin');
        break
        $('body').attr('class','sydney');
        break
    }

    }
  });
});


/*
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});

/*
