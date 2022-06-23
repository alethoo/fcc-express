let express = require('express');
let app = express();
let htmlPath = __dirname + "/views/index.html";
let middlewarePath = __dirname + "/public";

app.get("/", function(request, response) {
    response.sendFile(htmlPath);
});

app.use("/public", express.static(middlewarePath));









 module.exports = app;
