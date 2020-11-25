const express = require('express');
const router = express.Router();
var mysql = require('mysql');


function getAllData(req,res){

	var con = mysql.createConnection({
		host: "localhost",
		user: "tzannetos",
		password: "#tzannetos1",
		database:"softeng2020demo"
	});
	
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		let myquery="SELECT * FROM evchargingpoints";
		con.query(myquery, function (err, result, fields){
			if (err) throw err;
			res.send(result);
		});
	});
	
}

router.get('/data',getAllData);
module.exports = router; 