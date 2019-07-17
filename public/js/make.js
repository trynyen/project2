console.log("make js was called");

function postMeal() {
  var mealName = $("#meal-name").val();
  var quantity =$("#quantity").val();
  var zip = String($("#zip").val());
  var phone1 = String($("#phone1").val()); 
  var phone2 = String($("#phone2").val());  
  var phone3 = String($("#phone3").val());  
  var phone = phone1 + phone2 + phone3;
  var postObj = {
    "name": mealName,
    "quantity": Number(quantity),
    "zip" : zip,
    "phone": phone
  }

  console.log(postObj);
  $.post("/api/meals", postObj, function(meal){
    console.log(meal);
    window.location.href = '\meals';
  })
}

$("#make").on('click', postMeal);
