// Create nav bar element:
let navBar = document.createElement("p");
navBar.id = "navBar";
navBar.innerHTML = "Try them all: ";
document.body.appendChild(navBar);

//Store info for list of links
let linkMap = new Map([
  ["Link 1", "https://edwardgimlin.github.io/"],
  ["Link 2", "https://edwardgimlin.github.io/"],
  ["Link 3", "https://edwardgimlin.github.io/"]

]);

//Add links to nav bar
linkMap.forEach (function(value, key) {
  q = document.createElement("a");
  q.innerText = key;
  q.href = value;
  document.getElementById("navBar").appendChild(q);
  navBar.innerHTML += " | ";
})

//Add link back to main page
let mainPageLink = document.createElement("a");
mainPageLink.innerText = "Return to Main Page";
mainPageLink.href = "https://edwardgimlin.github.io/";
document.getElementById("navBar").appendChild(mainPageLink);

//Create the grid
for(let i = 1; i < 82; i++) {
  q = document.createElement("input");
  q.type = "text";
  q.id = i.toString();
  document.body.appendChild(q);
  if(i % 9 == 0) {
    rowBreak = document.createElement("br");
    document.body.appendChild(rowBreak);
  }
}

//Create the buttons
let checkButton = document.createElement("button");
checkButton.innerHTML = "Check Answer";
checkButton.addEventListener("click", checkAnswer);
document.body.appendChild(checkButton);

let resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", createGrid);
document.body.appendChild(resetButton);


/**
//Create the results display
let scoreParagraph = document.createElement("p");
scoreParagraph.id = "score";
document.body.appendChild(scoreParagraph);
**/
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
