const mongoose=require("mongoose");
const Staff=mongoose.model("Staff",{
    IdStaff:String,
    Name:String,
    Position:String,
    NumPhone:String,
    Sex:String,
    Email:String
})
module.exports=Staff;