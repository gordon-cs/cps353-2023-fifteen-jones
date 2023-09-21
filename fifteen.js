"use strict";

class Fifteen {
  tiles;

  constructor() {
    this.tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
    this.emptySquare = ["300px","300px"];
    this.moveTile = this.moveTiles;
    document.getElementById("puzzlearea").addEventListener('click', (event) => {
      let tile = this.tiles[event.target.innerText - 1];
      if (this.isSlidable(event.target.innerText - 1)) {
        let tilePosX = tile.style.marginLeft;
        let tilePosY = tile.style.marginTop;
        tile.style.marginLeft = this.emptySquare[0];
        tile.style.marginTop  = this.emptySquare[1];
        this.emptySquare = [tilePosX, tilePosY];
      }
      this.setupHover();
    });
    this.setupBoard();
    this.setupHover();
  }

  setupBoard() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        let index = (r * 4) + c;
        if (index < 15) {
          let xPos = 100 * c;
          let yPos = 100 * r;
          let tile = this.tiles[index];
          tile.style.marginLeft = xPos + "px";
          tile.style.marginTop = yPos + "px";
          tile.style.backgroundImage = "url('background.jpg')";
          tile.style.backgroundPosition = -xPos + "px " + -yPos + "px";
          tile.classList.add("standard");
        }
      }
    }
  }

  setupHover() {
    for(let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      if (this.isSlidable(i)) {
        tile.classList.add("valid");
      } else {
        tile.classList.remove("valid");
      }
    }
  }

  isSlidable(index) {
    let tile = this.tiles[index];
    let tilePosX = tile.style.marginLeft;
    let tilePosY = tile.style.marginTop;
    let xDistance = Math.abs(tilePosX.substring(0,tilePosX.length-2) -
                            this.emptySquare[0].substring(0, 
                                                this.emptySquare[0].length-2));
    let yDistance = Math.abs(tilePosY.substring(0,tilePosY.length-2) -
                            this.emptySquare[1].substring(0, 
                                                this.emptySquare[1].length-2));
      return ((xDistance <= 100 && yDistance == 0) ||
              (xDistance == 0 && yDistance <= 100));
  }
}

new Fifteen();
