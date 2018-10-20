var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var url = require('url');
var db = require('../database/data.js');
var stripe = require("stripe")("pk_test_wd9rThkNdTfjOnS9RXQIFPv6");
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/users', function(req, res){
  let email = req.body.email;
  let userName = req.body.userName;
  console.log("hola desdel server");
  if(!email) {
    res.sendStatus(400);
  } else {
    db.insertUser (email, userName, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.post('/times', function(req, res){
  let times = req.body.times;
  if(!times) {
    res.sendStatus(400);
  } else {
    db.insertTime (times, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.post('/order', function(req, res){
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let size = req.body.size;
  let specialInd = req.body.specialInd;
  let service = req.body.service;
  if(!name) {
    res.sendStatus(400);
  } else {
    db.insertOrder (name, phone, address, size, specialInd, service, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.post('/api/stripe', function(req, res, next) {
  const stripeToken = req.body.stripeToken;
    stripe.charges.create({
  amount: 999,
  currency: 'usd',
  description: 'Example charge',
  source: stripeToken,
}, function(err,charge){
    console.log('charge');
  if (err){
    res.send({
      success: false,
      message: 'Error'
    })
  } else{
    res.send({
      success: true,
      message: 'Success'
      });
    }
  });
});

app.get('/users', function (req, res) {
  db.selectUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("hi i love u att database")
      res.json(data);
    }
  });
});

app.get('/orders', function (req, res) {
  db.selectOrders(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("hi i sent the orders att database")
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
