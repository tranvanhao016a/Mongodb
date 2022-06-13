const { Decimal128 } = require("mongodb");
const mongoose=require("mongoose");
const RoomVoucher=mongoose.model("RoomVoucher",{
    IdRoomVoucher : String,
    IdStaff : String ,
    IdRoom : String ,
    NumPhoneCus : String,
    BookingDate : Date ,
    PayDay : Date ,
    NumCus : Number  ,
    IdSer: String ,
    Total: String
})
module.exports=RoomVoucher;