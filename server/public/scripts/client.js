console.log('js sourced');
$(document).ready(function(){
  refreshProducts();
  $('#submitButton').on('click', function(){
    var productName = $('#productName').val();
    var productCost = $('#cost').val();
    console.log('product name', productName);
    console.log('product cost', productCost);
    $.ajax({
      type: 'POST',
      url: '/product',
      data: {productName: productName,
             productCost: productCost},
      success: function(response){
        console.log(response);
        console.log('Product added to the inventory.');
        refreshProducts();
      }
    });
  });
});

function refreshProducts(){
  $.ajax({
    type:'GET',
    url: '/product',
    success: function(response){
      $('#productList').empty();
      //response is our product array
      var products = response;
      //loop through products and append to dom
      for (var i = 0; i < products.length; i +=1) {
        var product = products[i];
        $('#productList').append('<p>' + product.productName +
                                 ': $' + product.productCost + '</p>');
      }

    }
  });
};
