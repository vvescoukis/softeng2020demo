const express = require('express')
const app = express();
const port = 8000;
var path = require('path');



//initialize port for node application to run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});





app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// load all endpoints
const allData=require("./endpoints/allData.js");
const allMunicipalities=require("./endpoints/allMunicipalities.js");
const dataByMunicipality=require("./endpoints/dataByMunicipality");
const allNames=require("./endpoints/allNames");
const dataByName=require("./endpoints/dataByName");

//bind all endpoints to app router
app.use('/',allData);
app.use('/',allMunicipalities);
app.use('/',dataByMunicipality);
app.use('/',allNames);
app.use('/',dataByName);
