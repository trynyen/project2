console.log("meals js was called");

$(".meal-option").on("click", function(){
  var mealId = $(this).data("id");
  console.log(mealId);
  // $.put('api/meals', quantity, function(meal) {
  //   console.log(meal)
  // })
  $.ajax({
    url: '/api/meals',
    type: 'PUT',
    data: {mealId},
    success: function(response) {
      console.log(response);
      $.post('/api/orders', {mealId}, function(response){
        console.log(response);
      })
    }
 });
}); 
