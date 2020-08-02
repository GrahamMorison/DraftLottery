// 10th place is 30 balls, 9th is 24, 8th is 19, 7th is 14, 6th is 9, 5th is 4
// Create an array with all 100 balls in it
// Select a random ball and assign it to 1st pick
// Filter all balls out of that array with the same ball

let draftArr = [];

let tenthPlace = 30;
let ninthPlace = 24;
let eighthPlace = 19;
let seventhPlace = 14;
let sixthPlace = 9;
let fifthPlace = 4;

for (let i = 0; i < tenthPlace; i++) {
  draftArr.push(10);
}

for (let i = 0; i < ninthPlace; i++) {
  draftArr.push(9);
}

for (let i = 0; i < eighthPlace; i++) {
  draftArr.push(8);
}

for (let i = 0; i < seventhPlace; i++) {
  draftArr.push(7);
}

for (let i = 0; i < sixthPlace; i++) {
  draftArr.push(6);
}

for (let i = 0; i < fifthPlace; i++) {
  draftArr.push(5);
}

let firstPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== firstPick);

let secondPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== secondPick);

let thirdPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== thirdPick);

let fourthPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== fourthPick);

let fifthPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== fifthPick);

let sixthPick = draftArr[Math.floor(Math.random() * draftArr.length)];
draftArr = draftArr.filter(number => number !== sixthPick);

console.log(`First pick: ${firstPick}`);
console.log(`Second pick: ${secondPick}`);
console.log(`Third pick: ${thirdPick}`);
console.log(`Fourth pick: ${fourthPick}`);
console.log(`Fifth pick: ${fifthPick}`);
console.log(`Sixth pick: ${sixthPick}`);

