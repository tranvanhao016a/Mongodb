const mongoose=require("mongoose");
const Room=mongoose.model("Room",{
    IdRoom : String ,
    KindOfRoom : String,
    Status : String,
    CusMax : Number
})
module.exports=Room;