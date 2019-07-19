console.log("make js was called");

function postMeal() {
  var mealName = $("#meal-name").val();
  var quantity =$("#quantity").val();
  var zip = String($("#zip").val());
  var phone1 = String($("#phone1").val()); 

  var postObj = {
    "name": mealName,
    "quantity": Number(quantity),
    "zip" : zip,
    "phone": phone1
  };

  console.log(postObj);
  $.post("/api/meals", postObj, function(meal){
    console.log(meal);
    window.location.href = "\meals";
  });
}

$("#make").on("click", function(){
  zipCodeValidate();
  phonenumber();
  console.log("2 functions are called");
});

function zipCodeValidate() {
  var zipcode = /^\d{5}$/;
  if(zip.value.match(zipcode)) {
    postMeal();
    console.log("meal posted");
    
  } else {
    alert("Please enter a valid zip code");
    console.log("not posted");
  }
}


function phonenumber() {
  var phoneno = /^\d{10}$/;
  if(phone1.value.match(phoneno)) {
    postMeal();
    console.log("meal posted");

  } else {
    alert("Please enter a valid zip code");
    console.log("not posted");
  }
}