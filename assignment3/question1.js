const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

// Calculate the total using reduce()
totalMsft = msftData.reduce((acc, price) => acc + price, 0);

// Calculate the average
averageMsft = totalMsft / msftData.length;

console.log(averageMsft);
