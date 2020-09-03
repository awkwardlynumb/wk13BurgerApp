const connection = require("./connection.js");

const orm = {
  selectBurgers: function (eaten) {
    connection.query(
      "select * from burgers where devoured = ?",
      [eaten],
      function (err, res) {
        if (err) throw err;
        console.log(res);
      }
    );
  },
  addBurger: function (burger) {
    connection.query(
      "insert into burgers (name) values (?)",
      [burger],
      function (err) {
        if (err) throw err;
        console.log(burger + "added.");
      }
    );
  },
  devour: function (burger) {
    connection.query(
      "update burgers set devoured = 1 where name = ?",
      [burger],
      function (err) {
        if (err) throw err;
        console.log(burger + "DEVOURED!");
      }
    );
  },
};

module.exports = orm;
