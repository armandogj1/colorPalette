
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});