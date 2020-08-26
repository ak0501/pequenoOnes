let mongoose = require("mongoose");
let db = require("../models");
// const connection =
//   "mongodb+srv://ak0501:<password>@lilones.4ytzs.mongodb.net/<kidsdb>?retryWrites=true&w=majority";
// mongoose
//   .connect(connection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("Database Connected Successfully"))
//   .catch((err) => console.log(err));
// mongoose.connect("mongodb://localhost/dbLilOnes", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });
db.PassportUser.create({})
  .then(() => db.PassportUser.insertMany(userSeed))
  .then((data) => {
    console.log(data, " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
