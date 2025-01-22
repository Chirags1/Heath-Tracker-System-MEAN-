const mongoose = require("mongoose");
mongoose
  .connect()
  .then(() => {
    console.log("connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;
