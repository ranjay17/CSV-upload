//importing mongoose
const mongoose = require("mongoose");


//connecting to the database
const DB = 'mongodb+srv://sranjay15:rrRR1234@cluster0.e5jjfpe.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;