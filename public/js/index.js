console.log("index js was called");

var postLogIn = function () {
  var email = $("#email").val();
  var password = $("#password").val();

  $.post("/api/login", {
    email: email,
    password: password
  }, function(user){
    console.log(user)
    window.location.href = "/home";
  });
}


$("#submit").on("click", postLogIn);





