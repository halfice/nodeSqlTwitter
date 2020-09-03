var axios = require('axios');
var TweetJs = require('./tweetme');
const cors = require('cors');
const db = require('./db');


var sql = require("mssql");
const utils = require('./loadsqlfile');
"use strict";
const configv = require("./config");


port = process.env.PORT || 13000;

var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname + '/images'));
app.get('/my', function (req, res) {

  res.sendFile(path.join(__dirname + '/test.html'));
});


app.get('/', function (req, res) {
  TweetJs.getData().then(function (response) {
    // console.log(response);
    res.send(response);
  });
});

const fse = require( "fs-extra" );
const { join } = require( "path" );

app.get('/users/:userId', function (req, res) {
  sql.connect(configv.sql, function (err) {

    var fs = require('fs');
    path = require('path');
    var sqlstring=null; 
    filePath = path.join(__dirname, 'getEvents.sql');
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
      if (!err) {
          //console.log('received data: ' + data);
          sqlstring=data;
          var request = new sql.Request();
          console.log(req.params);
          request.input("EmpNo", sql.VarChar(50), req.params.userId);
          // query to the database and get the records
          request.query(sqlstring, function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            res.send(recordset);
          });





      } else {
          console.log(err);
      }
  });
    
  });
});




app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

/*




  app.get('/', function (req, res) {
    TweetJs.GetConfigmethod();
    res.send('hello world');
  })


*/