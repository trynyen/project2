console.log("home js was called");

var eatMeal = function () {
  window.location.href = "/meals";
};

var makeMeal = function () {
  console.log("make meal was called");
  window.location.href = "/make";
};

<<<<<<< HEAD
var makeMeal = function() {
    console.log("make meal was called")
    window.location.href =  "/make";
}
 

=======
>>>>>>> a388ed15f7df966c386d1b75818a66fedede5fd9
$("#make").on("click", makeMeal);
$("#et").on("click", eatMeal);
