var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/secrets", isAuthenticated, function (req, res) {
    res.json(req.user);
  });

  app.get("/home", isAuthenticated, function (req, res) {
    res.render("home");
  });

  app.get("/meals", isAuthenticated, function (req, res) {
    db.Meal.findAll({}).then(function (dbMeals) {


      res.render("meals", {dbMeals: dbMeals});
    });

  });

  app.get("/make", isAuthenticated, function (req, res) {
    res.render("make");
  });

  // app.put

  app.post("/api/register", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // ---------------- GET -------------------
  // Get all Meals
  app.get("/api/meals", function (req, res) {
    db.Meal.findAll({}).then(function (dbMeals) {


      res.json(dbMeals);
    });
  });


  // Account Info
  app.get("/api/user/:id", function (req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Meal]
      }).then(function(dbUser) {
        res.json(dbUser);
      });

  // });




  // ---------------- POST -------------------



  // Create a new Meal
  app.post("/api/meals", function (req, res) {
    var meal = {
      "name": req.body.name,
      "quantity": req.body.quantity,
      "zip": req.body.zip,
      "phone": req.body.phone,
      "userId": req.user.id
    };
    // console.log(req.body);
    // console.log(req.user.id);
    // res.end();

    db.Meal.create(meal).then(function (dbMeals) {
      res.json(dbMeals);
    });



  });


  // Delete a Meal
  app.delete("/api/meals/:id", function (req, res) {
    db.Meal.destroy({ where: { id: req.params.id } }).then(function (dbMeals) {
      res.json(dbMeals);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log("api log in was called");
    // db.User.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // }).then(function(dbUser){
    //   if(dbUser.validPassword(req.body.password)) {
    //     res.json(dbUser);
    //   } else {
    //     res.status(401);
    //     res.send("nope");
    //   }
    // })
    res.json(req.user);
    // res.end();
    // res.redirect("/home");
  });



  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
  app.put("/api/meals", function(req, res) {
    db.quantity.update({
      //thepart you are updating
      quantity: req.body.quantity--
    },{
      //where you want to update
      where: {
        id: req.body.id
      }
    }).then(function(dbQuantity) {
      res.render("meals", dbQuantity);
    });
  });
})};




