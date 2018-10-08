var express = require('express');
var app = express();
var database = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/smartWash', function(req, res){
  let times = req.body.times;

  if(!times) {
    res.sendStatus(400);
  } else {
    database.insertHour (times, (err, results) => {
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
