var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated"); 

module.exports = function(app) {


  // Shows make a meal form AND eat a meal button
  app.get("/home", function(req, res) {
    
  });


  // List of Meal
  app.get("/meal", function(req, res) {
    db.Meals.findAll({}).then(function(dbMeals) {
        res.json(dbMeal);
      });
    });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  // app.get("/secrets", isAuthenticated, function(req, res) {
  //   // res.send("SECRETS!!!");
  //   res.render("example");
  // })
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbMeals) {
      res.render("index", {
        Meals: dbMeals
      });
    });
  });

  // List of users activiy (either make or eat a meal)
  app.get("/member", function(req, res) {
    db.User.findAll({}).then(function(dbMeals){
      res.json(dbMeals);
    })
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
