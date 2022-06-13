const app=require("./src/server")
const Database = require("./src/database/mongo.js");
// const Item = require("./src/models/item.model");
// const { db } = require("./src/models/item.model");
const Phong = require("./src/models/phong.model");
const { db } = require("./src/models/phong.model");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

async function main() {
    // let db= await Database.intstance.createDatabase();
    let phong1=new Phong({
      tennguoithue: "Hao" ,
      ngaybatdau: new Date('Jun 23, 1912'),
      ngayketthuc: new Date('Jun 07, 1954'),
      loaiphong:"Phong Vip",

    });
    phong1.save((error,doc)=>{
      console.log(error,doc)
    });
  // }
  // app.get("/", (request, response) => {
    
  //   // console.log(__dirname + '/bt.html')
  //   response.sendFile(__dirname + '/index.html')
  //   });
    
  // app.get("/",(req,res)=>{
  //   Phong.find({},(error,docs)=>{
  //     if(!error){
  //       res.json(docs);
  //     }
  //   });
  // });

  // app.get("/item/:docId", async function (request, response) {
  //   let params = request.params.docId;
  //   // let collection = request.params.collection;

  //   Item.find({_id:{
  //     $oid: params
  //   },}.then((value)=>{
  //     console.log(value)
  //   }))

  // });

//   app.post("/api/item",(req,res)=>{
//   let body =req.body;
//   let data=body.data;
//   // console.log(data);
//   try{
//   let temp=new Item(data);
//   temp.save((err,value)=>{
//     res.json({
//       message:"Successful",
//       data:value,
//     });
//   });
// }catch(err){
//   res.status(404).json({message:err.toString()})
// };
//   });

  // app.put("/api/item",(req,res)=>{
  //   let body =req.body;
  //   let docId=body.docId;
  //   let data=body.data;
  //   Item.findByIdAndUpdate(docId,data,(err,value,result)=>{
  //     // console.log(err,value,result);
  //     res.json(value)
  //   })
  //   });

    // app.put("/api/item",(req,res)=>{
    //   let body =req.body;
    //   let docId=body.docId;
    //   let data=body.data;
    //   Item.findByIdAndUpdate(docId,{$set:data },(err,value,result)=>{
    //     // console.log(err,value,result);
    //     res.json(value)
    //   })
    //      res.send({
    //   message: "Update successful!!",
    //   updateTime: result.writeTime,
    // });
    //   });
    
    // app.delete("/api/db",(req,response)=>{
    //   let body =req.body;
    //   let docId=body.docId;
    //   Item.findByIdAndDelete(docId,(err,doc,res)=>{
    //    console.log(doc,res)
    //    response.send();
    //   })
    //   });

    //   app.delete("/api/db",(req,response)=>{
    //     let body =req.body;
    //     let docId=body.docId;
    //     let docs =[...req.body.docs];
    //     for(let docId of docs){
    //       firestore.collection(collection).doc(docId ).delete()
    //     }
    //     Item.findByIdAndDelete(docId,(err,doc,res)=>{
    //      console.log(doc,res)
    //      response.send();
    //     })
    //     });

    //   app.delete("/api/db",(req,response)=>{
    //     let body =req.body;
    //     let collection=body.collection;
    //     db.dropCollectione(collection,(err)=>{
    //      response.send(err);
    //     })
    //     });
      

app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on http://127.0.0.1:3000/")
});
}
main();