$(document).ready(function() { 

  const side1 = parseInt(prompt("Please enter 1st side length"));
  const side2 = parseInt(prompt("Please enter 2nd side length"));
  const side3 = parseInt(prompt("Please enter 3rd side length"));

  if (side1 === side2 && side1=== side3 && side2===side3) {
    $('#equil').show();
  } else if(side1===side2 || side1===side3 || side2===side3) {
    $('#iso').show();
  }  else if(side1!=side2 && side1!=side3 && side2!=side3) {
    $('#scale').show();
  }  else if (side1+side2 <= side3 || side1+side3 <=2 || side2+side3 <=1) {
    $('#nota').show();
  }
});