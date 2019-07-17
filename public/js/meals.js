console.log("meals js was called");

$(".meal-option").on("click", function(){
  var quantity = $(this).data("id");
  console.log(quantity);
  // $.put('api/meals', quantity, function(meal) {
  //   console.log(meal)
  // })
}) 
