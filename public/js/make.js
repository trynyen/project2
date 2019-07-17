console.log("make js was called");

function postMeal() {
  var mealName = $("#meal-name").val();
  var quantity =$("#quantity").val();
  var zip = $("zip").val();
  var phone1 = $("phone1").val();
  var phone2 = $("phone2").val();
  var phone3 = $("phone3").val();
  var phone = phone1 + phone2 + phone3;
  // var postObj = {
  //   ""
  // }
}

$("#make").on('click', postMeal);
