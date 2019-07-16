var db = require("../models");
var passport =  require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/secrets", isAuthenticated, function(req, res) {
    // res.send("SECRETS!!!");
    // res.send("secrets");
    res.json(req.user);
    // res.render("example");
  });

  app.get("/home", isAuthenticated, function(req, res) {
    res.render("home")
  });

  // Get all examples
  app.get("/api/meals", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/meals", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
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

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
