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

routes = require('./controllers/tvshows')(app);

// Connection to DB
mongoose.connect('mongodb://MongoLab-wy:wNGd2KKc.KUMZv4V185dh6MQ8nH7rO1yzsiC4iaGabY-@ds052827.mongolab.com:52827/MongoLab-wy', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});


app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});
