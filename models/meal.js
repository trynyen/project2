module.exports = function(sequelize, DataTypes) {
  var Meal = sequelize.define("Meal", {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    zip: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    
    
  });


  Meal.associate = function (models) {
    models.Meal.belongsTo(models.User, {
      foreignKey: "userId",
      allowNull: false
    });
  };

  return Meal;
};


// List.belongsTo(Task, {
//   as: 'dailyTask',
//   foreignKey: 'dailyTask'
// });

// List.belongsTo(Task, {
//   as: 'weeklyTask',
//   foreignKey: 'weeklyTask'
// });

// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1]
//     }
//   });

//   Post.associate = function (models) {
//     models.Post.belongsTo(models.Author, {
//       foreignKey: {

//         allowNull: false
//       }
//     });
//   };

//   // Add a belongsTo association to Authors here
//   // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
//   return Post;
// };
