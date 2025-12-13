const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

// Destructure the array to get individual values
low = bacData[0];
high = bacData[1];
open = bacData[2];
close = bacData[3];
volume = bacData[4];

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
