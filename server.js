const express = require("express");
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./route/htmlroute")(app);
require("./route/apiroute")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});