const mongoose=require("mongoose");
const Customer=mongoose.model("Customer",{
    IdCard: String,
    Name:String,
    NumPhone:String,
    Sex:String
})
module.exports=Customer;