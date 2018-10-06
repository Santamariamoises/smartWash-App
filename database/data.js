var mysql = require('mysql');

var connection = mysql.createConection({
  host   : 'localhost',
  user   :  'root',
  password  : 'password',
  database  : 'smartWash'
});

const insertHour = function(times, cb) {
  connection.query(
    "INSERT INTO deliver (times) VALUES (?)",
    [times],
    (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    }
  );
};

module.exports.insertHour = insertHour;
