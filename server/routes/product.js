var express = require('express');
var router = express.Router();
var products = [];

//express removed the '/product' when we do a app.use
router.post('/product', function(req,res){
    var product = req.body; //this is the data we sent
    console.log(product); //has a name and cost
    products.push(product);
    res.send({message: 'Successfully added our product!'});

});
//http://localhost:5002/products will go here

//as soon as it finds its target, it stops. so no duplicate gets
router.get('/', function(req, res){
  res.send(products);
});

module.exports = router;
