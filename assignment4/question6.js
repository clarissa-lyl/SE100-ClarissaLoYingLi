const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Modify the code below:

// Sort the prices in ascending order and filter out the lowest 3 prices

const sortedPrices = amdPrices.sort((a, b) => a - b);

const lowestPricesLimit = 3;

let lowestThreePrices = [];

for (let i = 0; i < lowestPricesLimit; i++) {
  lowestThreePrices.push(sortedPrices[i]);
}

console.log("The three lowest prices are", lowestThreePrices.join(", "));