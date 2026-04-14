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

let score = 0;
let answerMap = new Map([
 //Letter represents row top-to-bottom, number represents column left-to-right
 ["a1", true],
 ["a2", true],
 ["a3", true],
 ["a4", true],
 ["a5", true],
 ["a6", true],
 ["a7", true],
 ["a8", true],
 ["a9", true],
 ["a10", true],
 ["b1", true],
 ["b2", true],
 ["b3", true],
 ["b4", true],
 ["b5", true],
 ["b6", true],
 ["b7", true],
 ["b8", true],
 ["b9", true],
 ["b10", true],
 ["c1", true],
 ["c2", true],
 ["c3", true],
 ["c4", true],
 ["c5", true],
 ["c6", true],
 ["c7", true],
 ["c8", true],
 ["c9", true],
 ["c10", true],
 ["d1", true],
 ["d2", true],
 ["d3", true],
 ["d4", true],
 ["d5", true],
 ["d6", true],
 ["d7", true],
 ["d8", true],
 ["d9", true],
 ["d10", true],
 ["e1", true],
 ["e2", true],
 ["e3", true],
 ["e4", true],
 ["e5", true],
 ["e6", true],
 ["e7", true],
 ["e8", true],
 ["e9", true],
 ["e10", true],
 ["f1", true],
 ["f2", true],
 ["f3", true],
 ["f4", true],
 ["f5", true],
 ["f6", true],
 ["f7", true],
 ["f8", true],
 ["f9", true],
 ["f10", true],
 ["g1", true],
 ["g2", true],
 ["g3", true],
 ["g4", true],
 ["g5", true],
 ["g6", true],
 ["g7", true],
 ["g8", true],
 ["g9", true],
 ["g10", true],
 ["h1", true],
 ["h2", true],
 ["h3", true],
 ["h4", true],
 ["h5", true],
 ["h6", true],
 ["h7", true],
 ["h8", true],
 ["h9", true],
 ["h10", true],
 ["i1", true],
 ["i2", true],
 ["i3", true],
 ["i4", true],
 ["i5", true],
 ["i6", true],
 ["i7", true],
 ["i8", true],
 ["i9", true],
 ["i10", true],
 ["j1", true],
 ["j2", true],
 ["j3", true],
 ["j4", true],
 ["j5", true],
 ["j6", true],
 ["j7", true],
 ["j8", true],
 ["j9", true],
 ["j10", true]
]);

function initializeGrid( ) {

 answerMap.forEach(function(value, key) {
  if(value == true) {
   score++;
  }
 })

}

function colorChange(selectedSquare) {
 var element = document.getElementById(selectedSquare);
 if(score < answerMap.size) {
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
}
