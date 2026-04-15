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

//Toggle the rules display
let rulesButton = document.createElement("button");
rulesButton.innerHTML = "Show/Hide rules";
rulesButton.addEventListener("click", showRules);
document.body.appendChild(rulesButton);

//Create the buttons
let checkButton = document.createElement("button");
checkButton.innerHTML = "Check Answer";
checkButton.addEventListener("click", checkAnswer);
document.body.appendChild(checkButton);

let resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", createGrid);
document.body.appendChild(resetButton);

//Create the results display
let scoreParagraph = document.createElement("p");
scoreParagraph.id = "score";
document.body.appendChild(scoreParagraph);

//Rules display
let rulesDisplay = document.createElement("p");
rulesDisplay.id = "rulesDisplay";
rulesDisplay.innerHTML = "";
document.body.appendChild(rulesDisplay);

let breaker = document.createElement("br");
document.body.appendChild(breaker);

let answerString;
let startingString;

//checks if solution is correct
function checkAnswer() {
  var x = "";
  for(let i = 1; i < 17; i++) {
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
  for(let i = 1; i < 17; i++) {
    document.getElementById(i.toString()).value = "";
    document.getElementById(i.toString()).maxLength = 1;
    
  }
  document.getElementById("score").innerHTML = "";
}

//Display the rules
function showRules() {
  if(document.getElementById("rulesDisplay").innerHTML == "") {
    document.getElementById("rulesDisplay").innerHTML = "Fill in each square with a number from 1 to 4. The same number can only show up once in each row, column, and cell (outlined with solid lines).";
  }
  else {
    document.getElementById("rulesDisplay").innerHTML = "";
  }
}
