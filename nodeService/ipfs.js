const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data')

const pinFileToIPFS = async (req, res) => {

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
  let data = new FormData()

  const NFTMetadata = {  //Metadata content 
    name: 'Rimulation',
    description: `image :https://tile.openstreetmap.org/${req.body.tile.z}/${req.body.tile.x}/${req.body.tile.y}.png 
      Credit : www.openstreetmap.org `,
    image: `https://tile.openstreetmap.org/${req.body.tile.z}/${req.body.tile.x}/${req.body.tile.y}.png`,
    
  }
  function shortNumber(val) {
 
    let ed = val.toString()
   
    let [first, second] = ed.split('.')
        
    if (second) {   
      if (second.length > 8) {
        let final = first + 'D' + second.substring(0, 8)
           return final 
      
      }  
     else { 
      let final = first+'D' + second
   
      return final
    } }
    else{
      return first+'D'+second  
    }  
  } 
  
   
  let fileName =
    'X' + await shortNumber(req.body.tile.lat) + 'Y' + await shortNumber(req.body.tile.lng)
  let jsonpath = __dirname + `/json/${fileName}.json`
  const metadata = JSON.stringify(NFTMetadata,null,2)
  fs.writeFile(`./json/${fileName}.json`, metadata, (err) => {
    if (err) {
      throw err 
    }  
      pinMetadata(req, res, jsonpath)
  }) 

  async function pinMetadata(req, res, jsonpath) {
    let metadata = new FormData()
    metadata.append('file', fs.createReadStream(jsonpath))
    const metafileresult = await axios.post(url, metadata, {
      maxContentLength: 'Infinity',
    
      headers: {    
        'Content-Type': `multipart/form-data; boundary=${metadata._boundary}`,
        pinata_api_key: process.env.PINATA_APIKEY, //Insert your API KEY
        pinata_secret_api_key: process.env.PINATA_API_SECRETKEY, //Insert your API Secret KEY
      },
    })
  
    let IpfsHash = metafileresult.data.IpfsHash
     
    return res.json({
      success: 1, 
      message: 'Upload Successfully',
      ipfsHash:  IpfsHash,
    })
  } 
}
 
module.exports = {
  pinFileToIPFS,
}
 