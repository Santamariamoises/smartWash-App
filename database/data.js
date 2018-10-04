const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "holacode",
  database: "deliveries"
});

const insertHour = function(description, cb) {
  connection.query(
    "INSERT INTO deliver (dates) VALUES (?)",
    [description],
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
