console.log("make js was called");
var mealName;
var quantity;
var zip;
var phone1; 

function postMeal() {
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
};


$("#make").on("click", function(){
  mealName = $("#meal-name").val();
  quantity =$("#quantity").val();
  zip = $("#zip").val();
  phone1 = $("#phone1").val(); 
  console.log(mealName, quantity, zip, phone1);
  if (zipCodeValidate() && phonenumber()) {
    postMeal();
  }
});

function zipCodeValidate() {
  var zipcode = new RegExp("/^\d{5}$/");
  // console.log("zip is a " + typeOf)
  if(zip.match(zipcode)) {
    return true;
    
  } else {
    alert("Please enter a valid zip code");
  }
}


function phonenumber() {
  var phoneno = new RegExp("/^\d{10}$/");
  if(phone1.match(phoneno)) {
    return true;

  } else {
    alert("Please enter a valid zip code");
  }
}
