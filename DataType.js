const greetings = "Hello ,nice to see you, please put your data in system";
console.log(greetings);

let measurementsOne = "measure around your chest";
let measurementsTwo = "measure around your hip bone";
let measurementsThree = "measure around your seat";

let dressLength = [kneeLength, heelsLength, averageLength, shortLength];
let dressSleeveLength = [shortSleeves, mediumSleeves, longSleeves];

let dressFabric = [cotton, viscose, silk, tencelLyocell, elastane];
let dressFashion = [streightCut, freeCut, taperedCut];

const dressSize = [xs, s, m, l, xl, xxl];
const dressSizeWomen = [34, 36, 38, 40, 42, 44, 46, 48];
const dressSizeMen = [44, 46, 48, 50, 52, 54];

function recommendDressLength(height) {
  if (height < 160) {
    return dressLength[3]; // shortLength
  } else if (height < 170) {
    return dressLength[0]; // kneeLength
  } else if (height < 180) {
    return dressLength[2]; // averageLength
  } else {
    return dressLength[1]; // heelsLength
  }
}
