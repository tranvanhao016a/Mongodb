const { Decimal128 } = require("mongodb");
const mongoose=require("mongoose");
const Service=mongoose.model("Service",{
IdService: String ,
NameService : String,
PriceService : Decimal128
})
module.exports=Service;