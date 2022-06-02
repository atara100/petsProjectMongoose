const mongoose=require("mongoose");


const pet=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    favoriteFood:String,
    age:{
        type:Number,
        min:1,
        max:99
    }
});

module.exports=mongoose.model("pet",pet);