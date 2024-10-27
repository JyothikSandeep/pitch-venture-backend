const express=require('express')
// const registerController=require("./controllers/RegisterController")
const {gethello} = require("../controllers/RegisterController");
const router=express.Router()

router.get("/hello",gethello)


module.exports=router