const connection = require("./connection.js");

const orm = {
  selectBurgers: function (cb) {
    connection.query(
      "select * from burgers",
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
  addBurger: function (burger, cb) {
    connection.query(
      "insert into burgers (name) values (?)",
      [burger],
      function (err) {
        if (err) throw err;
        console.log(burger + " added.");
        cb()
      }
    );
  },
  devour: function (id, cb) {
    connection.query(
      "update burgers set devoured = 1 where id = ?",
      [id],
      function (err) {
        if (err) throw err;
        console.log(burger + "DEVOURED!");
        cb()
      }
    );
  },
};

module.exports = orm;
