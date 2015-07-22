$(document).ready(function(){
    battleInit();
 var placementCol = $('#colinput').val();
 var placementRow = $('#rowinput').val();
switch(placementCol) {
    case "a":
        placementCol = 1;
        break;
    case 'b':
        placementCol = 2;
        break;
      case 'c':
        placementCol = 3;
        break;
      case 'd':
        placementCol = 4;
        break;
      case 'e' :
        placementCol = 5;
        break;
      case 'f':
        placementCol = 6;
        break;
      case 'g':
        placementCol = 7;
        break;
      case 'h':
        placementCol = 8;
        break;
    default: 
        break;
}
 var shots = 25;
 $('#shots_rem').html(shots);
    $('.shoot').click( 
      function(){
          if (board [placementRow - 1][placementCol - 1] == true){
            shots = shots - 1;
//        return the new emoji  and replace wave
           else if (board [placementRow - 1][placementCol - 1] == false){
           //return the x emoji
            shots = shots - 1;
           };
        };
      };
   
   
//   var shot = $('#shoot').click(
//       function(){
//         shots - 1
//         return("You have " shot "s left.")
//         if shots = 0q{(
//           return("You lose!")
//         )}
        
//       })
//   var totalShipCount = 9
//     if
    //Variables you have access to:
    //totalShipCount = number of ships that have been spawned on the board
    //board = 2D array/matrix of boolean values. True means that a ship is in that space, false means that there is no ship.
});
