// function with a parameter called name
function displayGreeting(name) {
  // creating a new local variable that inserts the name into a string
  const message = `Hello, ${name} , welcome to our TryOnStore!`;
  // printing the variable to the console
  console.log(message);
}
displayGreeting("Suzanna");

let measurementsChest = "measure around your chest";
let measurementsHipBone = "measure around your hip bone";
let measurementsSeat = "measure around your seat";

function addMeasurementChest(value) {
  measurementsChest += `: ${value} inches`;
}

function addMeasurementHipBone(value) {
  measurementsHipBone += `: ${value} inches`;
}

function addMeasurementSeat(value) {
  measurementsSeat += `: ${value} inches`;
}

addMeasurementChest(36); // adds measurement value of 36 inches to measurementsChest variable
addMeasurementHipBone(42); // adds measurement value of 42 inches to measurementsHipBone variable
addMeasurementSeat(38); // adds measurement value of 38 inches to measurementsSeat variable

console.log(measurementsChest); // Output: "measure around your chest: 36 inches"
console.log(measurementsHipBone); // Output: "measure around your hip bone: 42 inches"
console.log(measurementsSeat); // Output: "measure around your seat: 38 inches"

let dressLength = [
  "knee Length",
  "heels Length",
  "average Length",
  "short Length",
];
let dressSleeveLength = ["Short Sleeves", "Medium Sleeves", "Long Sleeves"];
let dressFabric = ["cotton", "viscose", "silk", "tencel Lyocell", "elastane"];
let dressFashion = ["streight Cut", "free Cut", "tapered Cut"];

const dressSizeUniverse = ["xs", "s", "m", "l", "xl", "xxl"];
const dressSizeWomen = [34, 36, 38, 40, 42, 44, 46, 48];
const dressSizeMen = [44, 46, 48, 50, 52, 54];

function chooseLength(length) {
  if (dressLength.includes(length)) {
    console.log(`You have chosen the dress length: ${length}`);
  } else {
    console.log("Please choose a valid dress length.");
  }
}

function chooseSleeveLength(sleeveLength) {
  if (dressSleeveLength.includes(sleeveLength)) {
    console.log(`You have chosen the dress sleeve length: ${sleeveLength}`);
  } else {
    console.log("Please choose a valid dress sleeve length.");
  }
}

function chooseFabric(fabric) {
  if (dressFabric.includes(fabric)) {
    console.log(`You have chosen the dress fabric: ${fabric}`);
  } else {
    console.log("Please choose a valid dress fabric.");
  }
}

function chooseFashion(fashion) {
  if (dressFashion.includes(fashion)) {
    console.log(`You have chosen the dress fashion: ${fashion}`);
  } else {
    console.log("Please choose a valid dress fashion.");
  }
}

function chooseSize(size) {
  if (dressSizeUniverse.includes(size)) {
    console.log(`You have chosen the dress size: ${size}`);
  } else {
    console.log("Please choose a valid dress size.");
  }
}

if (dressSizeUniverse.indexOf("s") !== -1) {
  console.log("Size 's' is available.");
} else {
  console.log("Size 's' is not available.");
}

function chooseSizeWomen(size) {
  if (dressSizeWomen.includes(size)) {
    console.log(`You have chosen the women's dress size: ${size}`);
  } else {
    console.log("Please choose a valid women's dress size.");
  }
}

function chooseSizeMen(size) {
  if (dressSizeMen.includes(size)) {
    console.log(`You have chosen the men's dress size: ${size}`);
  } else {
    console.log("Please choose a valid men's dress size.");
  }
}

// check the size between comparison operator
const size = 42;
const sizeMessage =
  size > 40 ? "You need a large size." : "You need a medium size.";
console.log(sizeMessage);

// Example usage
chooseLength("kneeLength"); // Output: "You have chosen the dress length: kneeLength"
chooseSleeveLength("shortSleeves"); // Output: "You have chosen the dress sleeve length: shortSleeves"
chooseFabric("cotton"); // Output: "You have chosen the dress fabric: cotton"
chooseFashion("streightCut"); // Output: "You have chosen the dress fashion: streightCut"
chooseSizeUniverse("m"); // Output: "You have chosen the dress size: m"
chooseSizeWomen(38); // Output: "You have chosen the women's dress size: 38"
chooseSizeMen(50); // Output: "You have chosen the men's dress size: 50"

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

let chest = {
  type: "chest",
  size: 32,
};
let hip = {
  type: "hip",
  size: 33,
};

let seat = {
  type: "seat",
  size: 33,
};

function addMeasurment(type, size) {
  console.log(`The Measurement Around Your is ${type}: ${size} inches`);
}

addMeasurment(seat.type, seat.size);
addMeasurment(hip.type, hip.size);
addMeasurment(chest.type, chest.size);
