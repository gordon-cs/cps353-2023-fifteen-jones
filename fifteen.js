// Assignment 5: Fifteen Puzzle
// Authors: Matthew Jones and Luke Hart
// Student code for Assignment 5 of CPS353, which implements a fifteen 
// sliding puzzle using HTML, CSS, and JavaScript

"use strict";

// Class containing all the variables and logic for running the fifteen board
class Fifteen {
  constructor() {
    // Array of the div objects slicing off the parent puzzle area div
    this.tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
    // Initial margin values of the empty square
    this.emptySquare = ["300px","300px"];
    this.setupBoard();
    this.setupHover();

    // Listener for when the board is clicked, contains a check to see if the
    // clicked tile can be moved, swaps it with the empty sqaure, and updates
    // hover effects
    document.getElementById("puzzlearea").addEventListener('click', (event) => {
      let tile = this.tiles[event.target.innerText - 1];
      if (this.isValid(tile)) {
        let tilePos = [tile.style.marginLeft, tile.style.marginTop];
        this.setTilePosition(tile, this.emptySquare[0], this.emptySquare[1]);
        this.emptySquare = [tilePos[0], tilePos[1]];
        this.setupHover();
      }
    });
  }

  // Sets up the initial positions of the tiles and sets the 
  // background position
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

  // Adds hover effects to movable tiles, removes it from all others
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

  // Checks if a tile is within 100 px of the empty square in exactly 
  // one axis
  // Args: 
  // tile - a HTML div object representing a tile on the board
  // Returns: 
  // Boolean - true if tile is playable
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

  // Sets the position of a given tile by setting its margins 
  // Args: 
  // tile - a HTML div object representing a tile on the board
  // left - value for the new left margin of the tile, string in format "###px"
  // top - value for the new top margin of the tile, string in format "###px"
  // Returns: 
  // None
  setTilePosition(tile, left, top) {
    tile.style.marginLeft = left;
    tile.style.marginTop = top;
  }
}

new Fifteen();
