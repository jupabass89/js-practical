// Given a text string with ship positions... "A1, A2, A3;    D1, E1;      F3, F4, F5, F6"
// and another string with representing shots coordinates: "A1, A2, D1, A3, F3"
// Return the counting of how many ships have been sunk and how many are still floating.

const shipCoordinates = "A1, A2, A3, D1, E1, F3, F4, F5, F6".split(",");
const shotCoordinates = "A1, A2, D1, A3, F3".split(",");

let floatingShips = shipCoordinates.length;
let shunkedShips = 0;

shipCoordinates.forEach((ship) => {
  const result = shotCoordinates.find((coordinate) => ship === coordinate);
  if (result) {
    floatingShips --;
    shunkedShips ++;
  }
});

console.log({ floatingShips, shunkedShips });
