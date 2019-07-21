console.log("make js was called");
var mealName;
var quantity;
var zip;
var phone1; 
var image;

function postMeal() {
  var postObj = {
    "name": mealName,
    "quantity": Number(quantity),
    "zip" : zip,
    "image" : image,
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
  image = $("#image").val(); 
  console.log(mealName, quantity, zip, phone1);
  if (valiDate()) {
    postMeal();
  }
});



// function zipCodeValidate() {
//   var zipcode = new RegExp("/^\d{5}$/");
//   // console.log("zip is a " + typeOf)
//   if(zip.length === 5) {
//     return true;
    
//   } else {
//     alert("Please enter a valid zip code");
//     window.location.href = "/home";
//     return false;
//   }
// }


// function phonenumber() {
//   var phoneno = new RegExp("/^\d{10}$/");
//   if(phone1.length === 10) {
//     return true;

//   } else {
//     alert("Please enter a valid Phone Number");
//     window.location.href = "/home";
//     return false;
//   }
// }

function valiDate() {
  if(zip.length === 5 && phone1.length === 10) {
    return true;
  } else if(zip.length != 5 && phone1.length === 10) {
    alert("Please enter a valid Zipcode");
    window.location.href = "/home";
  } else if(zip.length === 5 && phone1.length != 10) {
    alert("Please enter a valid Phone Number");
    window.location.href = "/home";
  }
    else {
    alert("Please enter valid Zipcode and Phone Number");
    window.location.href = "/home";
    return false;
  }
};
