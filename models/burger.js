const orm = require("../config/orm.js");

const burger = {
  selectBurgers: function (cb) {
    orm.selectBurgers(function (result) {
      cb(result);
    });
  },
  addBurger: function (burger, cb) {
    orm.addBurger(burger, function (result) {
      cb(result);
    });
  },
  devour: function (id, cb) {
    orm.devour(id, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
