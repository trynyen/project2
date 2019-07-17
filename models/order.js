module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    quantity: DataTypes.INTEGER,
    userId: DataTypes.STRING
    
  });



  Order.associate = function (models) {
    models.Order.belongsTo(models.Meal, {
      foreignKey: "mealId",
      allowNull: false
    });
  };

  return Order;
};
