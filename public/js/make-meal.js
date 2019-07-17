$(document).ready(function () {
  var mealNameInput = $("#mealNameInput").val().trim();
  var mealQuantityInput = $("#mealQuantityInput").val().trim();
  var imageInput = $("#imageInput").val().trim();

  //When submit button is clicked, handleMakeAMeal is rendered
  $("#make").on("submit", handleMakeAMeal);

  function handleMakeAMeal(event) {
    //prevent auto submit
    event.preventDefault();

    //If either field on submit form is blank, return an error
    if (!mealNameInput || !mealQuantityInput || !mealQuantityInput) {
      return "Please enter all required fields";
    }

    //Otherwise, add meal function is called with the data user entered 
    addMeal({
      name: mealNameInput,
      quantity: mealQuantityInput,
      image: imageInput
    });
  }

  //Post the data user entered, call renderUserPage function and render user page
  function addMeal(mealData) {
    $.post("/api/meals", mealData, function () {
      // renderUserPage();
      // window.location.href = "/users";
    });
  }



  //RenderUserPage function will render the list of meals they made & meals they claimed
  // function renderUserPage(userData){
  //     //this will create a get request for table for make-meals and eaten meals
  //     $.get("/api/users", userData, function(){

  //     }),
  // }
});