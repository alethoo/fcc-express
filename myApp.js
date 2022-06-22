let express = require('express');
let app = express();
let htmlPath = __dirname + "/views/index.html";
let middlewarePath = __dirname + "/public";



console.log(htmlPath);

app.get("/", function(request, response) {
    response.sendFile(htmlPath);
});

app.use("/public", express.static(middlewarePath));

console.log("Hello World");




































 module.exports = app;
