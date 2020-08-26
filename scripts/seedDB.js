let mongoose = require("mongoose");
let db = require("../models");
const connection =
  "mongodb+srv://ak0501:<password>@lilones.4ytzs.mongodb.net/<kidsdb>?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
// mongoose.connect("mongodb://localhost/dbLilOnes", {
//   useNewUrlParser: true,
//   useFindAndModify: false
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
// db.Child.create({})
// .then(() => db.Child.insertMany(childSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Employee.create({})
// .then(() => db.Employee.insertMany(employeeSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Parent.create({})
// .then(() => db.Parent.insertMany(parentSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// db.Report.create({})
// .then(() => db.Report.insertMany(reportSeed))
// .then(data => {
//   console.log(data, " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
// let parentSeed = [{
//   name: "Bill",
//   last: "Tompson",
//   email: "bill@gmail.com",
//   password: "1234abc",
//   child: [
//     {
//       type: Schema.Types.ObjectId,
//       ref:"Child"
//     }
//   ]
// }];
