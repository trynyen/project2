console.log("home js was called");

var eatMeal = function () {
  window.location.href = "/meals";
};

var makeMeal = function () {
  console.log("make meal was called");
  window.location.href = "/meals";
};


$("#make").on("click", makeMeal);
$("#et").on("click", eatMeal);
