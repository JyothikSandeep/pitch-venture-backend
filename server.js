const express=require('express')
const app=express()
const Registerrouter=require("./routes/RegistrationRoute")
PORT=8000
app.use(express.json());
app.use("https://pitch-venture-backend.vercel.app/", Registerrouter);
// app.get("/hello",(req,res)=>{
//     console.log("insidde Hello")
//     res.send("Hello")
// })
app.listen(PORT,()=>{
    console.log("listenning to port",PORT)
})
