
const {pinFileToIPFS} =require("./ipfs")
const mintapi =require("./mintapi")
const router= require("express").Router();

router.post("/ipfs",pinFileToIPFS);
router.post("/mintapi",mintapi);
module.exports = router