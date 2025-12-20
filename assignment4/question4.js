const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

// Define the index for the closing price as 3
const indexOfClosingPrice = 3;

let totalClosePrice = 0;

for (let i = 0; i < msftData.length; i++) {
	// Access index 3 of each inner array and add it to the total
	totalClosePrice = totalClosePrice + msftData[i][indexOfClosingPrice];
}

// Calculate the average closing price
const averageClosePrice = totalClosePrice / msftData.length;
console.log("Average closing price of MSFT is", averageClosePrice.toFixed(2));