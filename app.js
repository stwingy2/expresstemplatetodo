const express = require('express')
const bodyParser = require('body-parser')
const {day}=require('./helpers')
const template = require('./template')
const app = express()
const ar=["first","second","third"]
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{



res.send(template(ar,day))
})
app.post("/",(req,res)=>{
ar.push(req.body.newItem)
    res.redirect("/")
})

app.listen(process.env.PORT || 3000,()=>console.log("LISTENING"))