$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page (the class of "member name" refers to a span on the page where the user name will be diplayed.)
   $.get("/api/user/:id").then(function(data) {
     $(".member-name").text(data.name);
   });
  });
  
  
  
  $(".meal").on('click', function(){
   console.log('clicked')
   var y = $(this).data("id");
   console.log(y);
   console.log("meal was clicked");
   var z= "#number-"+y;
   var x =$("#number-"+y);
   console.log(x)
   if(x.css("display") == "table-row"){
     x.css("display","none");
   } else {
     x.css("display","table-row");
   }
  });
  
  $(".submit").on('click', function(){
   console.log('submit-clicked')
   var a = $(this).data("id");
   var name = $('#name-'+a).val();
   var quantity = $('#quantity-'+a).val();
  
   var updateObj = {
     "mealId": a,
     "name" :name,
     "quantity": quantity
   };
   console.log(updateObj)
   $.ajax({
         url: '/api/meals',
         type: 'PUT',
         data: updateObj,
         success: function(response) {
           console.log(response);
           window.location.reload();
         }
      });
  });
  
  $(".delete-meal").on('click', function(){
   var q = $(this).data("id");
   console.log(q);
   $.ajax({
     url: '/api/meals/'+q,
     type: 'DELETE',
  
     success: function(response) {
       console.log(response);
       window.location.reload();
     }
  });
  
  });
  