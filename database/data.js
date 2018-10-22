var mysql = require('mysql');

const connection = mysql.createConnection({
  host   : 'localhost',
  user   :  'root',
  password  : 'holacode',
  database  : 'smartWash'
});

// post new user to database
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

const insertTime = function(times, callback) {
  connection.query(
    'INSERT INTO schedule (times) VALUES (?)',
    [times],
    (err, results, fields) => {
      if (err) {
        callback(err, null);
        console.log(err);
      } else {
        callback(null, results);
      }
    }
  );
};

var insertOrder= function (name, phone, address, size, specialInd, service, callback) {
  connection.query(
    'INSERT INTO orders (name, phone, address, size, specialInd, service) VALUES (?,?,?,?,?,?)',
  [name, phone, address, size, specialInd, service],   (err, results, fields) => {
      if (err) {
        callback(err, null);
        console.log(err);
      } else {
        callback(null, results);
      }
    }
  );
};

var selectUsers = function(callback) {
  connection.query('SELECT * FROM users', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectOrders = function(callback) {
  connection.query('SELECT * FROM orders', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectOrders = selectOrders;
module.exports.insertUser = insertUser;
module.exports.selectUsers = selectUsers;
module.exports.insertTime = insertTime;
module.exports.insertOrder = insertOrder;
