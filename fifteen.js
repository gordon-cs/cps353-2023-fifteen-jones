let tiles = [].slice.call(document.getElementsByTagName("div")).slice(1);
console.log(tiles);
let positions = ["one_one", "one_two", "one_three", "one_four", 
                 "two_one", "two_two", "two_three", "two_four", 
                 "three_one", "three_two", "three_three", "three_four",
                 "four_one", "four_two", "four_three", "four_four"]

setupPosition();
// mountBackground();

function setupPosition() {
  for(let i = 0; i<tiles.length; i++) {
    let tile = tiles[i];
    tile.classList.add(positions[i]);
  }
}

function mountBackground() {
  
  console.log(divs);
}
