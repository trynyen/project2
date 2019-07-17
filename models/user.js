var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    models.User.hasMany(models.Meal, {
      foreignKey: 'userId',
      allowNull: false
    });
  };

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

User.addHook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
})

  return User;
};
