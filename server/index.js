var express = require('express');
var app = express();
var database = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/deliver', function(req, res){
  let dates = req.body.dates;

  if(!dates) {
    res.sendStatus(400);
  } else {
    database.insertTime(dates, (err, results) => {
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
