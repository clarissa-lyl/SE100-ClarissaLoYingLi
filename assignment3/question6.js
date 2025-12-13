const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
// Destructure the array to get individual values
open = disneyData['open'];
high = disneyData['high'];
low = disneyData['low'];
close = disneyData['close'];
volume = disneyData['volume'];

// Logic to check pricing trend of bacData
if (close > open) {
    if (volume > 100000) {
        console.log("Strong Bullish");
    } else {
        console.log("Bullish");
    }
} else if (close < open) {
    if (volume > 10000) {
        console.log("Strong Bearish");
    } else {
        console.log("Bearish");
    }
} else if (close === open) {
    console.log("Neutral");
}