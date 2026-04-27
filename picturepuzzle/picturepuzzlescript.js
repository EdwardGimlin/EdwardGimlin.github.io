// Create nav bar element:
let navBar = document.createElement("p");
navBar.id = "navBar";
navBar.innerHTML = "Try them all: ";
document.body.appendChild(navBar);

//Store info for list of links
let linkMap = new Map([
  ["1", "picturepuzzle1.html"],
  ["2", "picturepuzzle2.html"],
  ["3", "picturepuzzle3.html"],
  ["4", "picturepuzzle4.html"],
  ["5", "picturepuzzle5.html"],
  ["6", "picturepuzzle6.html"],
  ["7", "picturepuzzle7.html"],
  ["8", "picturepuzzle8.html"],
  ["9", "picturepuzzle9.html"],
  ["10", "picturepuzzle10.html"],
  ["11", "picturepuzzle11.html"]

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

let statusMap = new Map([
 //Letter represents row top-to-bottom, number represents column left-to-right
 ["a1", 0],
 ["a2", 0],
 ["a3", 0],
 ["a4", 0],
 ["a5", 0],
 ["a6", 0],
 ["a7", 0],
 ["a8", 0],
 ["a9", 0],
 ["a10", 0],
 ["b1", 0],
 ["b2", 0],
 ["b3", 0],
 ["b4", 0],
 ["b5", 0],
 ["b6", 0],
 ["b7", 0],
 ["b8", 0],
 ["b9", 0],
 ["b10", 0],
 ["c1", 0],
 ["c2", 0],
 ["c3", 0],
 ["c4", 0],
 ["c5", 0],
 ["c6", 0],
 ["c7", 0],
 ["c8", 0],
 ["c9", 0],
 ["c10", 0],
 ["d1", 0],
 ["d2", 0],
 ["d3", 0],
 ["d4", 0],
 ["d5", 0],
 ["d6", 0],
 ["d7", 0],
 ["d8", 0],
 ["d9", 0],
 ["d10", 0],
 ["e1", 0],
 ["e2", 0],
 ["e3", 0],
 ["e4", 0],
 ["e5", 0],
 ["e6", 0],
 ["e7", 0],
 ["e8", 0],
 ["e9", 0],
 ["e10", 0],
 ["f1", 0],
 ["f2", 0],
 ["f3", 0],
 ["f4", 0],
 ["f5", 0],
 ["f6", 0],
 ["f7", 0],
 ["f8", 0],
 ["f9", 0],
 ["f10", 0],
 ["g1", 0],
 ["g2", 0],
 ["g3", 0],
 ["g4", 0],
 ["g5", 0],
 ["g6", 0],
 ["g7", 0],
 ["g8", 0],
 ["g9", 0],
 ["g10", 0],
 ["h1", 0],
 ["h2", 0],
 ["h3", 0],
 ["h4", 0],
 ["h5", 0],
 ["h6", 0],
 ["h7", 0],
 ["h8", 0],
 ["h9", 0],
 ["h10", 0],
 ["i1", 0],
 ["i2", 0],
 ["i3", 0],
 ["i4", 0],
 ["i5", 0],
 ["i6", 0],
 ["i7", 0],
 ["i8", 0],
 ["i9", 0],
 ["i10", 0],
 ["j1", 0],
 ["j2", 0],
 ["j3", 0],
 ["j4", 0],
 ["j5", 0],
 ["j6", 0],
 ["j7", 0],
 ["j8", 0],
 ["j9", 0],
 ["j10", 0]
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
      if(statusMap.get(selectedSquare) == 0) {
       statusMap.set(selectedSquare, 1);
       element.classList.toggle("dark-square"); 
       if(answerMap.get(selectedSquare) == 1) {
         score++;
       }
       else {
         score--;
       }
      }
      else if(statusMap.get(selectedSquare) == 1) {
       statusMap.set(selectedSquare, 2);
       element.classList.toggle("dark-square");
       element.classList.toggle("red-square");
       document.getElementById(selectedSquare).innerHTML = "X";
       if(answerMap.get(selectedSquare) == 1) {
         score--;
       }
       else {
         score++;
       }
      }
      else {
       statusMap.set(selectedSquare, 0);
       element.classList.toggle("red-square");
       document.getElementById(selectedSquare).innerHTML = ""; 
      }
      if(score == answerMap.size) {
       document.getElementById("scoreDisplay").innerHTML = "PUZZLE COMPLETE";
       document.body.style.backgroundColor = "Lime";
      }
 }
}
