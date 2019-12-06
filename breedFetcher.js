const request = require("request");
const fs = require("fs");

let catSearch = process.argv.slice(2);
request(
	`https://api.thecatapi.com/v1/breeds/search?q=${catSearch[0]}`,
	(error, response, body) => {
		const data = JSON.parse(body);
		console.log(data[0].name);
		console.log(data[0].description);
		if (error) {
			console.log("error", error);
		}
	}
);
