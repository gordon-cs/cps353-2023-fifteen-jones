"use strict";

let tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
console.log(tiles);
let positions = ["one_one", "one_two", "one_three", "one_four", 
                 "two_one", "two_two", "two_three", "two_four", 
                 "three_one", "three_two", "three_three", "three_four",
                 "four_one", "four_two", "four_three", "four_four"]

setupPosition();
mountBackground();

function setupPosition() {
  for(let i = 0; i<tiles.length; i++) {
    let tile = tiles[i];
    tile.classList.add(positions[i]);
    tile.style.backgroundImage = "url('background.jpg')";
  }
}

function mountBackground() {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      let index = (r * 4) + c;
      if (index < 15) {
        let yPos = -100 * r;
        let xPos = -100 * c;
        tiles[index].style.backgroundPosition = xPos + "px " + yPos + "px";
      }
    }
  }
}
