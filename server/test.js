var MongoClient = require('mongodb').MongoClient;
var url='mongodb+srv://huan12781:Nho12781@cluster0.fidun.mongodb.net/test';
// MongoClient.connect('mongodb+srv://huan12781:Nho12781@cluster0.fidun.mongodb.net/test', function (err, db) {
//     // if (err) throw err;
//     // var dbo = db.db("Hotel");
//     // dbo.collection("phongs").findOne({}, function(err, result) {
//     //   if (err) throw err;
//     //   console.log(result.tennguoithue);
//     //   db.close();
//     // });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Hotel");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Hotel");
//     var myobj = [
//         {tennguoithue: "Hien" ,
//         ngaybatdau: new Date('Jun 23, 1912'),
//         ngayketthuc: new Date('Jun 07, 1954'),
//         loaiphong:"Phong Thuong",}
//     ];
//     dbo.collection("phongs").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Hotel");
//     dbo.collection("phongs").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Hotel");
//     dbo.collection("phongs").find({tennguoithue
//         : 'Hao'}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
//   });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Hotel");
//   var myquery = { tennguoithue : "Hao" };
//   var newvalues = { $set: {loaiphong:"Phong Thuong"} };
//   dbo.collection("phongs").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Hotel");
  var myquery = { tennguoithue : "Hao" };
  dbo.collection("phongs").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});