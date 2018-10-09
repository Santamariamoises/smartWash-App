var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database/index.js');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/users', function(req, res){
  let times = req.body.times;

  if(!userName) {
    res.sendStatus(400);
  } else {
    database.insertUser (mail, userName, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
