var mysql = require('mysql');

var connection = mysql.createConection({
  host   : 'localhost',
  user   :  'root',
  password  : 'password',
  database  : 'smartWash-App'
});

var orders = function(call back) {
  connection.query('SELECT * FROM orders', function(err,results,fields){
    if(err){
      callback(err, null);
    }else{
      callback(null, results);

    }
  });
};

module.exports.orders = orders;
