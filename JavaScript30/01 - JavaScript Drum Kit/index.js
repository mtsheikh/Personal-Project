window.onload = function() {
  // your code

  window.addEventListener("keydown", checkKeyPressed, false);

  function checkKeyPressed(e) {
    switch (e.keyCode) {
      // For Letter A
      case 65:
        playSoundForA();
        break;
      // For Letter S
      case 83:
        playSoundForS();
        break;
      // For Letter D
      case 68:
        playSoundForD();
        break;
      // For Letter F
      case 70:
        playSoundForF();
        break;
      // For Letter G
      case 71:
        playSoundForG();
        break;
      // For Letter H
      case 72:
        playSoundForH();
        break;
      // For Letter J
      case 74:
        playSoundForJ();
        break;
      // For Letter K
      case 75:
        playSoundForK();
        break;
      // For Letter L
      case 76:
        playSoundForL();
        break;
    }
  }

  document.getElementsByClassName("key")[0].onclick = function() {
    playSoundForA();
  };

  document.getElementsByClassName("key")[1].onclick = function() {
    playSoundForS();
  };

  document.getElementsByClassName("key")[2].onclick = function() {
    playSoundForD();
  };

  document.getElementsByClassName("key")[3].onclick = function() {
    playSoundForF();
  };

  document.getElementsByClassName("key")[4].onclick = function() {
    playSoundForG();
  };

  document.getElementsByClassName("key")[5].onclick = function() {
    playSoundForH();
  };

  document.getElementsByClassName("key")[6].onclick = function() {
    playSoundForJ();
  };

  document.getElementsByClassName("key")[7].onclick = function() {
    playSoundForK();
  };

  document.getElementsByClassName("key")[8].onclick = function() {
    playSoundForL();
  };

  function playSoundForA() {
    document.getElementsByTagName("audio")[0].play();
  }

  function playSoundForS() {
    document.getElementsByTagName("audio")[1].play();
  }
  function playSoundForD() {
    document.getElementsByTagName("audio")[2].play();
  }
  function playSoundForF() {
    document.getElementsByTagName("audio")[3].play();
  }
  function playSoundForG() {
    document.getElementsByTagName("audio")[4].play();
  }
  function playSoundForH() {
    document.getElementsByTagName("audio")[5].play();
  }
  function playSoundForJ() {
    document.getElementsByTagName("audio")[6].play();
  }
  function playSoundForK() {
    document.getElementsByTagName("audio")[7].play();
  }
  function playSoundForL() {
    document.getElementsByTagName("audio")[8].play();
  }
};
