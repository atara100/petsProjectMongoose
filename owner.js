const mongoose=require("mongoose");
const { stringify } = require("querystring");

const owner=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
        },
        lastName:String,
        email:{
            type:String,
            required:true,
            lowercase:true
        },
        age:{
            type:Number,
            min:1,
            max:99
        },
        veterinarianId: mongoose.SchemaTypes.ObjectId,
        petsId:[mongoose.SchemaTypes.ObjectId]
});

module.exports=mongoose.model("owner",owner);