const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
};

// Write your code below

const volume = 1512311;

// Convert volume to string and add to disneyData object
disneyData["volume"] = volume.toString();

console.log(disneyData);