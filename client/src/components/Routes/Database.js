import database from "../Firebase/FbCredentials";

const Data=(fName, lName, imageUrl)=> {
    database.collection('teacher').add({
      name: fName,
      lname: lName,
      profile_picture : imageUrl
    });
  }

  export default Data;