const express = require("express")
const valitationRouter= require("../EXPRESS---VALIDATION-MIDDLEWARE/valitation")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req,res,next)=>{
    console.log("Route",req.url,"body:",(typeof(req.body.cast)),"At:",new Date())

    if((typeof(req.body.name)==="string")&& (typeof(req.body.description)==="string") &&(typeof(req.body.genre)==="string")
    && (typeof(req.body.id)==="number")&&(typeof(req.body.cast))&&(typeof(req.body.rating)==="number")){
        next()
    }
    else {
        return res.status(400).send("invalid data")
    }
    
})
app.use("/sagar",valitationRouter)

app.listen(8080)