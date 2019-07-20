document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var instance = M.Carousel.init({   
        numVisible: 4,
        fullWidth: true,
        shift: 10,
        padding: 3,


      });
  });
console.log("meals js was called");

// function myFunction() {
//   var y = $(this).data("id");
//   console.log(y);
  
//   var x = document.getElementById("number-"+y);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

$(".meal").on('click', function(){
  var y = $(this).data("id");
  console.log(y);
  console.log("meal was clicked");
  var z= "#number-"+y;
  var x =$("#number-"+y);
  console.log(x)
  if(x.css("display") == "block"){
    x.css("display","none");
  } else {
    x.css("display","block");
  }
 
    // var x = document.getElementById("number-"+y);
   
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
})

// $(".meal-option").on("click", function(){
//   var mealId = $(this).data("id");
//   console.log(mealId);
//   // $.put('api/meals', quantity, function(meal) {
//   //   console.log(meal)
//   // })
//   $.ajax({
//     url: '/api/meals',
//     type: 'PUT',
//     data: {mealId},
//     success: function(response) {
//       console.log(response);
//       $.post('/api/orders', {mealId}, function(response){
//         window.location.reload();
//       })
//     }
//  });
// }); 
