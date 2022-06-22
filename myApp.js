let express = require('express');
let app = express();

absolutePath = __dirname + "/views/index.html"
console.log(absolutePath);

app.get("/", function(request, response) {
    response.sendFile(absolutePath);
});

console.log("Hello World");




































 module.exports = app;
