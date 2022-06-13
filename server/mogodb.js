const app=require("./src/server")
const Database = require("./src/database/mongo.js");
const Room = require("./src/models/room.model");
const Service = require("./src/models/service.model");
const Customer = require("./src/models/customer.model");
const Staff = require("./src/models/staff.model");
const RoomVoucher = require("./src/models/roomvoucher.model");
const Account = require("./src/models/account.model");
// const { db } = require("./src/models/phong.model");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function main() {
    let db= await Database.intstance.createDatabase();

    // app.post("/themPhong", (req, res) => {
    //     var body=req.body;
    //     let phong=new Phong(body.data);
    //     phong.save((error,doc)=>{
    //         console.log(error,doc)
    //     });
    // });
    // app.put("/update",(req,res)=>{
    //     let body =req.body;
    //     let docId="628005793488cdb5caddb635";
    //     let data= 
    //     {"tennguoithue": "Hasdefsdfs", 
    //        "loaiphong":"Phong"};
    //     Phong.findByIdAndUpdate(docId,data,(err,value,result)=>{
    //   // console.log(err,value,result);
    //     res.json(value)
    //     })
    // });
    // app.delete("/delete",(req,res)=>{
    //     let body =req.body;
    //     let docId="628005793488cdb5caddb635";
    //     Phong.findByIdAndDelete(docId,(err,value,result)=>{
    // })
    // });


    //Service
    app.get("/getAllService",(req,res)=>{
        Service.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addService", (req, res) => {
        var body=req.body;
        let service=new Service(body.data);
          service.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new service successful!!!",
          });
    });
    app.put("/updateService", async (req,res)=>{
        var body =req.body;
        var t= await Service.find({IdService:"150"});
            console.log(t._id);
        //  var objectId= cursor.next()._id;
    });

    //Customer
    app.get("/getAllCustomer",(req,res)=>{
        Customer.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addCustomer", (req, res) => {
        var body=req.body;
        let customer=new Customer(body.data);
        customer.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new customer successful!!!",
          });
    });
    
    //Staff
    app.get("/getAllStaff",(req,res)=>{
        Staff.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addStaff", (req, res) => {
        var body=req.body;
        let staff=new Staff(body.data);
        staff.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new staff successful!!!",
          });
    });

    //Account
    app.get("/getAllAccount",(req,res)=>{
        Account.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addAccount", (req, res) => {
        var body=req.body;
        let account=new Account(body.data);
        account.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new account successful!!!",
          });
    });
    
    //Room
    app.get("/getAllRoom",(req,res)=>{
        Room.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addRoom", (req, res) => {
        var body=req.body;
        let room=new Room(body.data);
        room.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new room successful!!!",
          });
    });

    //RoomVoucher
    app.get("/getAllRoomVoucher",(req,res)=>{
        RoomVoucher.find({},(error,docs)=>{
        if(!error){
            res.json(docs);
        }
        });
    });
    app.post("/addRoomVoucher", (req, res) => {
        var body=req.body;
        let roomvoucher=new RoomVoucher(body.data);
        roomvoucher.save((error,doc)=>{
            console.log(error,doc)
        });
        res.send({
            message: "add new room voucher successful!!!",
          });
    });

    app.listen(3000,"0.0.0.0",()=>{
        console.log("Server is running on http://127.0.0.1:3000/")
    });
}
main();