var express = require('express'); //define express
var app = express(); //call it
var path = require('path'); //path to pick up everything "catch-all"
var port = 5002; //define a port
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var productRouter = require('./routes/product.js');
app.use('/product', productRouter);

app.get('/*', function(req, res){ //make sure this statement is LAST!!
  //http://localhost:5002/script/client.js
  //scripts/client.js === req.params[0];
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
  console.log('Server running on port', port);
});
