const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getDataByName(req,res){

	var con = mysql.createConnection({
		host: "localhost",
		user: "tzannetos",
		password: "#tzannetos1",
		database:"softeng2020demo"
	});
	
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		let myQuery="SELECT * FROM evchargingpoints WHERE Name="+"'"+req.params.choice+"'";
		con.query(myQuery, function (err, result, fields){
			if (err) throw err;
			res.send(result);
		});
	});


}

router.get('/data/name/:choice',getDataByName)
module.exports = router; 
