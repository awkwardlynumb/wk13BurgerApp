const orm = require("../config/orm.js");

const burger = {
  selectBurgers: function (cb) {
    orm.selectBurgers(function (result) {
      cb(result);
    });
  },
  addBurger: function (cb) {
    orm.addBurger(function (result) {
      cb(result);
    });
  },
  devour: function () {
    orm.devour(function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
