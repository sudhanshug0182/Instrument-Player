/*

For Loop:

The loop runs and attaches a click event listener to each .drum button, one by one.
It does this by using document.querySelectorAll(".drum")[i] to select each .drum element in the loop.
Event Listener Setup:

Inside the loop, the addEventListener() method is called for each .drum element, setting up a listener that waits for a "click" event.
Click Event Happens:

After the loop completes, the event listeners are still active.
Whenever a user clicks any .drum button, the associated function is triggered.


The loop only runs once, but it sets up the click event listeners for each .drum element.
The event listeners remain attached to the .drum elements even after the loop finishes.
Every time you click a .drum button, the associated function runs, ensuring it works for all keys, every time a user clicks a button.
*/

// let key;
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         key = this.innerHTML;  // 'this' refers to the clicked element
//         makeSound(key);  // Pass the key to the 'call' function
//     });
// }


let key;
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (event) => {
      // key = this.innerHTML; // this does not refer to the element that triggered the event, which is what you need. Instead, it refers to the lexical scope (the surrounding context where the function was defined).
        key = event.target.textContent; // (can use textContent also) 'event.target' refers to the clicked element
        makeSound(key);  // Pass the key to the 'call' function
    });
}


//detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("https://files.codingninjas.in/snare-28545.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("https://files.codingninjas.in/crash-28546.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
