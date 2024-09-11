// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });

// function makeSound(key) {

//   switch (key) {
//     case "g":
//       var tom1 = new Audio("sounds/ganesh1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/ganesh2.mp3");
//       tom2.play();
//       break;

//     case "n":
//       var tom3 = new Audio('sounds/ganesh3.mp3');
//       tom3.play();
//       break;

//     case "e":
//       var tom4 = new Audio('sounds/ganesh4.mp3');
//       tom4.play();
//       break;

//     case "s":
//       var snare = new Audio('sounds/ganesh5.mp3');
// //       snare.play();
// //       break;

// //     case "h":
// //       var crash = new Audio('sounds/ganesh6.mp3');
// //       crash.play();
// //       break;

// //     case "A":
// //       var kick = new Audio('sounds/kick-bass.mp3');
// //       kick.play();
// //       break;


// //     default: console.log(key);

// //   }
// // }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }



var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var currentlyPlaying = [];

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    stopCurrentlyPlaying();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  stopCurrentlyPlaying();
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "g":
      var tom1 = new Audio("sounds/ganesh1.mp3");
      currentlyPlaying.push(tom1);
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/ganesh2.mp3");
      currentlyPlaying.push(tom2);
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio('sounds/ganesh3.mp3');
      currentlyPlaying.push(tom3);
      tom3.play();
      break;

    case "e":
      var tom4 = new Audio('sounds/ganesh4.mp3');
      currentlyPlaying.push(tom4);
      tom4.play();
      break;

    case "s":
      var snare = new Audio('sounds/ganesh5.mp3');
      currentlyPlaying.push(snare);
      snare.play();
      break;

    case "h":
      var crash = new Audio('sounds/ganesh6.mp3');
      currentlyPlaying.push(crash);
      crash.play();
      break;

    case "A":
      var kick = new Audio('sounds/ganesh2.mp3');
      currentlyPlaying.push(kick);
      kick.play();
      break;

    default: console.log(`${key}`);
  }
}

function stopCurrentlyPlaying() {
  for (var i = 0; i < currentlyPlaying.length; i++) {
    currentlyPlaying[i].pause();
    currentlyPlaying[i].currentTime = 0;
  }
  currentlyPlaying = [];
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
