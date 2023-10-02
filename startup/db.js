const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/votersAppDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database"));
};
