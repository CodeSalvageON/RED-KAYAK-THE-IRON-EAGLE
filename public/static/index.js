// Audio stuff
function playSound (sound, repeat) {
  switch (repeat) {
    case 0:
      document.getElementById(sound).play();
      break;
    case 1:
      document.getElementById(sound).cloneNode(true).play();
      break;
  }
}

// Animation stuff 
const theRiver = document.getElementById("theriver");
function switchScreen (sec1, sec2) {
  isDisabled = 1;
  document.getElementById(sec1).style.display = "none";
  theRiver.style.backgroundColor = "red";

  setTimeout(function () {
    document.getElementById(sec1).style.display = "block";
    theRiver.style.backgroundColor = "black";

    setTimeout(function () {
      document.getElementById(sec1).style.display = "none";
      theRiver.style.backgroundColor = "red";

      setTimeout(function () {
        document.getElementById(sec2).style.display = "block";
        theRiver.style.backgroundColor = "black";
        isDisabled = 0;
      }, 50);
    }, 50);
  }, 50);
}

// Special animations
let switchScreenMenu = 0;
const coverBg = document.getElementById("coverbg");
const dasTitle = document.getElementById("dasTitle");

setInterval(function () {
  switch (switchScreenMenu) {
    case 0:
      coverBg.src = "/static/bloody.gif";
      dasTitle.style.display = "block";
      switchScreenMenu = 1;
      break;
    case 1:
      coverBg.src = "/static/REDKAYAK.PNG";
      dasTitle.style.display = "none";
      switchScreenMenu = 0;
      break;
  }
}, 5000);

// Interactive functions 
function checkDisabled () {
  switch (isDisabled) {
    case 0:
      break;
    case 1:
      return false;
      break;
  }
}

// Button interactions
let isDisabled = 0;

const enAudioMenu = document.getElementById("enaudiomenu");
const newGame = document.getElementById("new");

enAudioMenu.onclick = function () {
  checkDisabled();
  playSound("track1", 0);
  enAudioMenu.style.display = "none";
}

newGame.onclick = function () {
  checkDisabled();
  switchScreen("cover", "cutscene1");
}