// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }


function switchGray(){
	$('body').CSS('color', 'back');
	$('body').CSS('backgroundColor', 'gray');
	
}

function switchWhite() {
	$('body').CSS('color', 'back');
	$('body').CSS('backgroundColor', 'gray');

}

$('grayButton').click(switchGray);
$('whiteButton').click(switchWhite);