const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
