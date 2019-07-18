document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var instance = M.Carousel.init({   
        numVisible: 3,
        fullWidth: true,

      });
  });
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
        window.location.reload();
      })
    }
 });
}); 
