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

$("#make").on("click", postMeal);


function zipCodeValidate(zip) {
  var zipcode = /^\d{5}$/;
  if(zip.value.match(zipcode)) {
    return true;
  } else {
    alert("Please enter a valid zip code");
    return false;
  }
}


function phonenumber(phone1) {
  var phoneno = /^\d{10}$/;
  if(phone1.value.match(phoneno)) {
    return true;
  } else {
    alert("Please enter a valid zip code");
    return false;
  }
}