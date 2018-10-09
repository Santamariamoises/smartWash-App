var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'holacode',
  database  : 'smartWash'
});

<<<<<<< 34be37ddf3f64c355fb4b72e6ab670e4f4fcdb9a
const insertHour = function(times, cb) {
  connection.query(
    "INSERT INTO deliver (times) VALUES (?)",
    [times],
=======
const insertUser = function(mail, userName, callback) {
  console.log("quiubo desde la db");
  connection.query(
    'INSERT INTO users (mail, userName) VALUES (?, ?)',
    [mail, userName],
>>>>>>> fixed export errors
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

<<<<<<< 34be37ddf3f64c355fb4b72e6ab670e4f4fcdb9a
module.exports.insertHour = insertHour;
=======

module.exports.insertUser = insertUser;
>>>>>>> fixed export errors
