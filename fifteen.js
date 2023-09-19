"use strict";

let tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
let emptySquare =["300px","300px"];

document.getElementById("puzzlearea").addEventListener('click', moveTiles);

setUpBoard();

function setUpBoard() {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      let index = (r * 4) + c;
      if (index < 15) {
        let xPos = 100 * c;
        let yPos = 100 * r;
        tiles[index].style.marginLeft = xPos + "px";
        tiles[index].style.marginTop = yPos + "px";
        tiles[index].style.backgroundImage = "url('background.jpg')";
        tiles[index].style.backgroundPosition = -xPos + "px " + -yPos + "px";
      }
    }
  }
}

function moveTiles(event) {
  let tile = tiles[event.target.innerText - 1];
  let tilePosX = tile.style.marginLeft;
  let tilePosY = tile.style.marginTop;
 // if (Math.abs(tilePosX.substring(0,-2)-emptySquare[1].substring(0,-2)))
  console.log(Math.abs(tilePosX.substring(0,-2)-emptySquare[1].substring(0,-2)));
  tile.style.marginLeft = emptySquare[0];
  tile.style.marginTop  = emptySquare[1];
  emptySquare = [tilePosX, tilePosY];
}

