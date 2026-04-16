// Create nav bar element:
let navBar = document.createElement("p");
navBar.id = "navBar";
navBar.innerHTML = "Try them all: ";
document.body.appendChild(navBar);

//Store info for list of links
let linkMap = new Map([
  ["1", "numberplace.html"],
  ["2", "numberplace2.html"]
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

//Place to show the rules
let rulesDisplay = document.createElement("p");
rulesDisplay.id = "rulesDisplay";
rulesDisplay.innerHTML = "";
document.body.appendChild(rulesDisplay);

let breaker = document.createElement("br");
document.body.appendChild(breaker);

//Create the grid
for(let i = 1; i < 82; i++) {
  q = document.createElement("input");
  q.type = "text";
  q.id = i.toString();
  q.style.border = "1px solid";
  if(i < 10) {
    q.style.borderTop = "10px solid";
  }
  if(i % 3 == 0) {
    q.style.borderRight = "10px solid";
  }
  else if(i % 9 == 1) {
    q.style.borderLeft = "10px solid";
  }
  if((i - 1) % 27 >= 18) {
    q.style.borderBottom = "10px solid";
  }
  document.body.appendChild(q);
  if(i % 9 == 0) {
    rowBreak = document.createElement("br");
    document.body.appendChild(rowBreak);
  }
}

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
  document.getElementById("score").innerHTML = "";
  
}

//Display the rules
function showRules() {
  if(document.getElementById("rulesDisplay").innerHTML == "") {
    document.getElementById("rulesDisplay").innerHTML = "Fill in each square with a number from 1 to 9. The same number can only show up once in each row, column, and 9x9 box.";
  }
  else {
    document.getElementById("rulesDisplay").innerHTML = "";
  }
}
