const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const index_path=path.join(__dirname,'/Frontend/views')
app.use(express.static(index_path))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("views",index_path)
app.set("view engine","ejs")
app.get("/:name",(req,res)=>{
   res.render("index")
})
app.post("/show",(req,res)=>{
    console.log( req.body.name)
    return res.redirect(`/show?n=${req.body.name}`)

})
app.get("/show",(req,res)=>{
let name = req.query.n
 res.render("show",{
     name
 })
})
app.listen(port,()=>{
    console.log(`listen from port no ${port}`)
})