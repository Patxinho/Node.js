var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', function (req, res) {
    res.send("Hello world!");
});



app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});
