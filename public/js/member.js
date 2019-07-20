$(document).ready(function() {
// This file just does a GET request to figure out which user is logged in
// and updates the HTML on the page (the class of "member name" refers to a span on the page where the user name will be diplayed.)
  $.get("/api/user/:id").then(function(data) {
    $(".member-name").text(data.name);
  });
});
  