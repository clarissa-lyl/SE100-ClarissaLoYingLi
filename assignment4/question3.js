const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

// Calculate the 7-day Simple Moving Average (SMA) for AMD
const sum = amdPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sma = sum / amdPrices.length;

// Count number of days price was above the SMA
let countAboveSMA = 0;
for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > sma) {
    countAboveSMA = countAboveSMA + 1;
  }
}

console.log("Number of days AMD was above the 7-day SMA is:", countAboveSMA);