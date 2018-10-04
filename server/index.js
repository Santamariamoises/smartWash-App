var express = require('express');
var app = express();
var database = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
