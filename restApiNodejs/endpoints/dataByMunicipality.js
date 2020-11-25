const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getDataByMunicipality(req,res){

	var con = mysql.createConnection({
		host: "localhost",
		user: "tzannetos",
		password: "#tzannetos1",
		database:"softeng2020demo"
	});
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		let limiter=req.query.limit;
		let myQuery="SELECT * FROM evchargingpoints WHERE Municipality="+"'"+req.params.choice+"'";
		if(limiter==undefined || Number.isInteger(Number(limiter))==false){}
			else{
				myQuery=myQuery +" LIMIT " +Number(limiter);
			}

			console.log(myQuery)
			con.query(myQuery, function (err, result, fields){
				if (err) throw err;
				res.send(result);
			});
		});


}

router.get('/data/municipality/:choice',getDataByMunicipality)
module.exports = router; 
