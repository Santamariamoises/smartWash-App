var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'holacode',
  database  : 'smartWash'
});

const insertUser = function(email, userName, callback) {
  console.log("quiubo desde la db");
  connection.query(
    'INSERT INTO users (email, userName) VALUES (?, ?)',
    [email, userName],
    (err, results, fields) => {
      if (err) {
        callback(err, null);
        console.log(err);
      } else {
        console.log("a webo ya llego un usuario a la db pasele");
        callback(null, results);
      }
    }
  );
};

module.exports.insertUser = insertUser;
