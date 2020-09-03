var sql = require("mssql");
const utils = require('./loadsqlfile');
"use strict";
const configv = require("./config");

//async getuserAttendance(userid){
getuserAttendance4 = async (userid) => {
    var sqlQueries = null;
    //utils.loadSqlQueries("data").then(function (response) {
    //sql start 
    //var sqlcontes=response;
    sql.connect(configv.sql, function (err) {
        if (err) console.log("error" + err);
        // create Request object
        var request = new sql.Request();
        // request.input("EmpNo", sql.VarChar(50), userid);
        // query to the database and get the records
        request.query("select top 1 * from core.users").then(function (record) {
            console.log(record);// record;
        });;//end ethen
    });

    //sql end





    //}); //loading quries end 

}


function getuserAttendance(req, response) {

    try {
        //sql start 
        //var sqlcontes=response;
        let res=null;
         sql.connect(configv.sql, function (err) {
            if (err) console.log("error" + err);
            // create Request object
            var request = new sql.Request();
            // request.input("EmpNo", sql.VarChar(50), userid);
            // query to the database and get the records
             res = request.query('select top 1 * from core.users', function (err, recordset) {
                if (err) console.log(err);
                return recordset;
            });
        });
        //sql end
        // Don't forget to return something   
        return res
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = {
    getuserAttendance,

};
