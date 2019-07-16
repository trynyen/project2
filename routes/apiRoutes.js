var db = require("../models");

module.exports = function(app) {

  // ---------------- GET -------------------
  // Get all Meals
  app.get("/api/meals", function(req, res) {
    db.Meal.findAll({}).then(function(dbMeals) {
      res.json(dbMeals);
    });
  });


  // Account Info
  app.get("/api/user/:id", function(req, res) {

  });


  // Logout
  app.get("/logout", function(req, res) {

  });


  // ---------------- POST -------------------
  // Login
  app.get("/api/login", function(req, res) {

  });

  
  // Signup
  app.get("/api/login", function(req, res) {

  });


  // Create a new Meal
  app.post("/api/meals", function(req, res) {
    db.Meal.create({

    }).then(function(dbMeals) {
      res.json(dbMeals);
    });
  });


  // Delete a Meal
  app.delete("/api/meals/:id", function(req, res) {
    db.Meal.destroy({ where: { id: req.params.id } }).then(function(dbMeals) {
      res.json(dbMeals);
    });
  });
};

