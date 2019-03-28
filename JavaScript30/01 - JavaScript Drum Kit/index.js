window.onload = function() {
  // your code

  let keys = document.querySelectorAll(".key");
  let audio = document.querySelectorAll("audio");

  keys[0].onclick = function() {
    playSoundForA();
  };

  keys[1].onclick = function() {
    playSoundForS();
  };

  keys[2].onclick = function() {
    playSoundForD();
  };

  keys[3].onclick = function() {
    playSoundForF();
  };

  keys[4].onclick = function() {
    playSoundForG();
  };

  keys[5].onclick = function() {
    playSoundForH();
  };

  keys[6].onclick = function() {
    playSoundForJ();
  };

  keys[7].onclick = function() {
    playSoundForK();
  };

  keys[8].onclick = function() {
    playSoundForL();
  };

  function playSoundForA() {
    audio[0].play();
  }
  function playSoundForS() {
    audio[1].play();
  }
  function playSoundForD() {
    audio[2].play();
  }
  function playSoundForF() {
    audio[3].play();
  }
  function playSoundForG() {
    audio[4].play();
  }
  function playSoundForH() {
    audio[5].play();
  }
  function playSoundForJ() {
    audio[6].play();
  }
  function playSoundForK() {
    audio[7].play();
  }
  function playSoundForL() {
    audio[8].play();
  }
};
