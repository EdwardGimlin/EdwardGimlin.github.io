let score = 0;
let answerMap = new Map( );

function initializeGrid( ) {

 answerMap.forEach(function(value, key) {
  if(value == true) {
   score++;
  }
 })

}

function colorChange(selectedSquare) {
 var element = document.getElementById(selectedSquare);
      element.classList.toggle("dark-square");
      if(answerMap.get(selectedSquare)) {
       answerMap.set(selectedSquare, false);
       score--;
      }
      else {
       answerMap.set(selectedSquare, true);
       score++;
      }
      if(score == answerMap.size) {
       document.getElementById("scoreDisplay").innerHTML = "PUZZLE COMPLETE";
       document.body.style.backgroundColor = "Lime";
      }
}
