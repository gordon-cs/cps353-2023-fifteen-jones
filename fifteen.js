"use strict";

class Fifteen {
  constructor() {
    this.tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
    this.emptySquare = ["300px","300px"];
    this.setupBoard();
    this.setupHover();
    document.getElementById("puzzlearea").addEventListener('click', (event) => {
      let tile = this.tiles[event.target.innerText - 1];
      if (this.isValid(tile)) {
        let tilePos = [tile.style.marginLeft, tile.style.marginTop];
        this.setTilePosition(tile, this.emptySquare[0], this.emptySquare[1]);
        this.emptySquare = [tilePos[0], tilePos[1]];
      }
      this.setupHover();
    });
  }

  setupBoard() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        let index = (r * 4) + c;
        if (index < 15) {
          let tile = this.tiles[index];
          this.setTilePosition(tile, 100*c + "px", 100*r + "px");
          tile.style.backgroundPosition = -100*c + "px " + -100*r + "px";
          tile.classList.add("standard");
        }
      }
    }
  }

  setupHover() {
    for(let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      if (this.isValid(tile)) {
        tile.classList.add("valid");
      } else {
        tile.classList.remove("valid");
      }
    }
  }

  isValid(tile) {
    let tilePos = 
    [tile.style.marginLeft.substring(0,tile.style.marginLeft.length-2), 
     tile.style.marginTop.substring(0,tile.style.marginTop.length-2)];
    let emptyPos = 
    [this.emptySquare[0].substring(0, this.emptySquare[0].length-2), 
     this.emptySquare[1].substring(0, this.emptySquare[1].length-2)];
    let xDistance = Math.abs(tilePos[0] - emptyPos[0]);
    let yDistance = Math.abs(tilePos[1] - emptyPos[1]);
    return ((xDistance <= 100 && yDistance == 0) ||
            (xDistance == 0 && yDistance <= 100));
  }

  setTilePosition(tile, left, top) {
    tile.style.marginLeft = left;
    tile.style.marginTop = top;
  }
}

new Fifteen();
