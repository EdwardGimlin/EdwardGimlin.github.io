let answerString;
let startingString;

//checks if solution is correct
function checkAnswer() {
  var x = "";
  for(let i = 1; i < 82; i++) {
    x += document.getElementById(i.toString()).value;
  }
  if(x == answerString) {
    document.getElementById("score").innerHTML = "correct";
  }
  else {
    document.getElementById("score").innerHTML = "incorrect";
  }
}

//create or restart grid
function createGrid() {
  for(let i = 1; i < 82; i++) {
    if(startingString[i-1] == "-") {
      document.getElementById(i.toString()).value = "";
    }
    else {
      document.getElementById(i.toString()).value = startingString[i-1];
      document.getElementById(i.toString()).readOnly = true;
      document.getElementById(i.toString()).style.fontWeight = 800;
      document.getElementById(i.toString()).style.backgroundColor = "lightgray";
    }
    document.getElementById(i.toString()).maxLength = 1;
    
  }
  
}
