const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "holacode",
  database: "deliveries"
});

const insertTime = function(dates, cb) {
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

module.exports.insertTime = insertTime;
