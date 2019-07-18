
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, open);
});        
console.log("index js was called");

var postLogIn = function () {
  var email = $("#email").val();
  var password = $("#password").val();

  $.post("/api/login", {
    email: email,
    password: password
  }, function(user) { 
    console.log(user);
    window.location.href = "/home";
  });
};

var postRegister = function () {
  var registerEmail = $("#email2").val();
  var registerPassword = $("#password2").val();

  $.post("/api/register", {
    email: registerEmail,
    password: registerPassword
  }, function(user) { 
    console.log(user);
    // window.location.href = "/home";
  });
};

$("#submit").on("click", postLogIn);
$("#register").on("click", postRegister);

// =======
// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");



// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
// >>>>>>> master:public/js/home.js
//   });
// }


