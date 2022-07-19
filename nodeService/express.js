const typeorm = require("typeorm");
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router")
const cors = require("cors");
const { Entity } = require("typeorm");
const port = process.env.PORT 
 
app.use(cors());
app.options('*', cors());   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));        
     
app.use("/api",router)  
app.use("/mint",router)
 
const connection = new typeorm.DataSource({
  type: "postgres",   
  host: "castor.db.elephantsql.com",
  port: 5432, // default port of postgres
  username: "mrabouuj",
  password: "QvhCQM5jwdFFh7kHdzPW2nN2uI7fxNYS",
  database: "mrabouuj",
  entities: [require("./Entity"),require('./UserInfoEntity')],
  synchronize: true,
  logging: false,
})
connection.initialize()
  .then(async(connection) => {
     
   // const repository = connection.getRepository(TransactionEntity);
   
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
app.listen(port || 5001, '0.0.0.0', () => {
    console.log("Server is running.",port);
  });
  app.post("/mint", async function (req, res){
  
     const txRepo = connection.getRepository("UserData");
 
    Buyer=req.body.data.buyer;
    TokenId=req.body.data.tokenId;
    Time=req.body.data.time;
    
var date = new Date(Time*1000);
var hours=date.getHours();
console.log(hours,'hourssss');
var minutes=date.getMinutes();
console.log(minutes,'minutesssss');
var seconds=date.getSeconds();
console.log(seconds,'seconds');
var formattedTime=hours+':'+minutes+':'+seconds;
console.log(formattedTime,'formattedtime');
var xyz= formattedTime.toString();
console.log(xyz,'xyzzzzz');
console.log(date,'convert timestamp into date ');
const Dates=date.toString();
console.log(Dates,'dateeee');
var MintTime= Dates;
   const tx=  await txRepo.insert({Buyer,TokenId,MintTime});
     //const results = await txRepo.save(tx);
    //  return res.send(tx);   

   }); 
    app.post("/UserInfo",async function(req,res){
    Buyer=req.body.UserData.buyer;
    var valuex=req.body.UserData.x;
    console.log(valuex,'xxxxxxxxxxxxxxxxxxx');
    let TileX=valuex.toString();
    console.log(TileX,'tileeeeex');
    valuey=req.body.UserData.y;
    let TileY=valuey.toString();
    console.log(TileY,'tileeeeey');
    valuez=req.body.UserData.z;
    let Zoom=valuez.toString(); 
    console.log(Zoom,'zoooooom');
    longitude=req.body.UserData.longitude;
    let Longitude= longitude.toString();
    latitude=req.body.UserData.latitude;
    let Latitude= latitude.toString();
    const repo=connection.getRepository("UserInfo");
    
    const tx=  await repo.insert({Buyer,TileX,TileY,Zoom,Longitude,Latitude});
    console.log('Data inserted successfully');
  }) 