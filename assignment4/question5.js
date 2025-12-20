const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

// Define the key for the closing price as "close"
const keyOfClosingPrice = "close";

let totalClosePrice = 0;

for (let i in disneyData) {
	// Access the closing price using the key and convert it to a number
	totalClosePrice = totalClosePrice + parseFloat(disneyData[i][keyOfClosingPrice]);
}

// Calculate average closing price
const averageClosePrice = totalClosePrice / disneyData.length;
console.log("Average closing price of Disney is", averageClosePrice.toFixed(2));
