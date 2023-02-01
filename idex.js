const express = require("express")
const daten = require("./Daten.js")
const bodyparser= require("body-parser");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyparser.urlencoded({extended: true}))


router.get("/",(req,res)=>{
    
res.render("News.ejs", {datern: daten} )
})


module.exports= router;

//News