const  listenEvent = async (req, res)=>{
    //await console.log(req.body,'times');
       //const txRepo = connection.getRepository("Userdata");
    //  console.log(txRepo);
       //  const tx = await txRepo.create(req.body); 
      //const {tcount} = req.body; 
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
   // const tx=  await txRepo.insert({Buyer,TokenId,Dates});
       //const results = await txRepo.save(tx);
      //  return res.send(tx);   
  
     }; 

module.exports={
listenEvent
}