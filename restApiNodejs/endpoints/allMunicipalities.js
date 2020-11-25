const express = require('express');
const router = express.Router();
var mysql = require('mysql');


function getallMunicipalities(req,res){

	var con = mysql.createConnection({
		host: "localhost",
		user: "tzannetos",
		password: "#tzannetos1",
		database:"softeng2020demo"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		let myQuery="SELECT DISTINCT Municipality FROM evchargingpoints";
		con.query(myQuery, function (err, result, fields){
			if (err) throw err;
			res.send(result);
		});
	});


}

router.get('/data/municipalities',getallMunicipalities)
module.exports = router; 