var db = require("../models");

module.exports = function(app) {


  // Redirects to Signup page (if logged in, redirects to '/home')
  app.get("/", function(req, res) {

  });


  // Redirects to login page
  app.get("/login", function(req, res) {

  });


  // Shows make a meal form AND eat a meal button
  app.get("/home", function(req, res) {
    
  });


  // List of Meal
  app.get("/meal", function(req, res) {
    db.Meals.findAll({}).then(function(dbMeals) {
        res.json(dbMeal);
      });
    });
  });


  // List of users activiy (either make or eat a meal)
  app.get("/member", function(req, res) {
    db.User.findAll({}).then(function(dbMeals))
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
