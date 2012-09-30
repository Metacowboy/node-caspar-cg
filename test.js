var CasparCG = require("./");

ccg = new CasparCG({
	host: "localhost",
	port: 5250,
	debug: true
});

ccg.connect(function () {
	ccg.info(function (err, serverInfo) {
		console.log(serverInfo);
	});

	ccg.play("1-1", "AMB");

	setTimeout(function () {
		ccg.clear("1");
		ccg.disconnect();
	}, 5 * 1000);
});

ccg.on("connected", function () {
	console.log("Connected");
});