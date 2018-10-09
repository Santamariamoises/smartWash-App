var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'holacode',
  database  : 'smartWash'
});

const insertUser = function(mail, userName, callback) {
  console.log("quiubo desde la db");
  connection.query(
    'INSERT INTO users (mail, userName) VALUES (?, ?)',
    [mail, userName],
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

module.exports.insertUser = insertUser;
