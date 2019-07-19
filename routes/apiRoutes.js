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
  // app.get("/api/user/:id", function (req, res) {

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

  app.post("/api/orders", function(req,res) {
    console.log("req.body: ", req.body.mealId, "req.user.id: ", req.user.id);
    // db.Order.
    db.Meal.findAll({where:{
      id: req.body.mealId
    }}).then(function(mealObj){
      console.log("**************",mealObj[0].dataValues.id);
      db.Order.create(
        {
          "quantity": 1,
          "userId": req.user.id,
          "mealId": mealObj[0].dataValues.id
        },
        {
          where: {
            id: mealObj[0].dataValues.id
          }
        }).then(function(dbPost) {
        res.json(dbPost);
        });
    })
    res.json("worked");
  });



  app.get("/user", function (req, res) {
    console.log("*******", req.user.id);
    db.Meal.findAll({
      where: {
        userId : req.user.id
      }
    }).then(function (dbMeals) {
      res.render('member', {dbMeals});
    });
  });

  app.get("/api/users/:id", function (req, res) {
    var userMeals;
    var userOrders;
    db.Meal.findAll({
      where: {
        userId: req.params.id
      }
    }).then(function (dbMeals) {
      res.render('member', {dbMeals});
    });
  });


app.put("/api/meals", function(req, res) {
  console.log("*********",req.body.mealId);
  db.Meal.findAll({where:{
    id: req.body.mealId
  }}).then(function(mealObj){
    console.log("**************",mealObj[0].dataValues.id);
    if(mealObj[0].dataValues.quantity <= 1) {
      db.Meal.destroy({where: {
        id: req.body.mealId
      }}).then(function(deletedMeal) {
        res.json(deletedMeal);
      })
    }
    db.Meal.update(
      {
        "name": mealObj[0].dataValues.name,
        "quantity": Number(mealObj[0].dataValues.quantity) -1,
        "zip": mealObj[0].dataValues.zip,
        "phone": mealObj[0].dataValues.phone,
        "userId": mealObj[0].dataValues.userId
      },
      {
        where: {
          id: mealObj[0].dataValues.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
      });
  })
});
};




