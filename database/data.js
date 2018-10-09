var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'holacode',
  database  : 'smartWash'
});

const insertuser = function(userName, mail, callback) {
  console.log("quiubo desde la db");
  connection.query(
    'INSERT INTO users (userName, mail) VALUES (?, ?, ?, ?, ?, ?)',
    [name, descrip, price, category, email, vendor],
    (err, results, fields) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(results);
        callback(null, results);
      }
    }
  );
};


module.exports.insertHour = insertHour;
