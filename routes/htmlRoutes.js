var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated"); 

module.exports = function(app) {
  // Load index page


  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
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
    db.User.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
