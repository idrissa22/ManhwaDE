const express = require("express")
var dat = require("./dat.js")
var fa = dat[0]
const router =express.Router();
router.get ("/", (req,res) => {
res.render("le.ejs",{sat:fa})
})
module.exports=router;

console.log(fa.Horror.Manhwas)