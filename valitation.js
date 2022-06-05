
const {Router}=require("express")

const  valitationRouter = Router()

valitationRouter.post("/",(req,res)=>{
    res.send("data")
})

module.exports= valitationRouter