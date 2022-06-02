
const mongoose=require("mongoose");

const veterinarians=new mongoose.Schema({
    firstName:String,
    lastName:String,
    phone:String
});

module.exports=mongoose.model("veterinarians",veterinarians);

