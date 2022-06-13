const mongoose=require("mongoose");
const Account=mongoose.model("Account",{
    User : String,
    Password :String,
})
module.exports=Account;