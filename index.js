const express = require("express")
const bodyparser= require("body-parser")
const { ObjectID } = require("mongodb");

const mongoose=require("mongoose")

  
  
const eins = require("./eins")
const zwei = require("./zwei")
var ManhwaSeiten= require("./Manhwas")
const nodemailer= require("nodemailer")
require("dotenv").config();

mongoose
.connect(process.env.MONGOOSE)
.then(()=>console.log("mit der Datenbank verbunden"))
.catch((err)=>console.log(err))

const User = mongoose.model('User', mongoose.Schema({

    Horror:{
       
    Titel: String,
   Beschreibung: String,
   Datum: String,
   Verfasser: String,
   Bild:String,
    Manhwas:[{
        Titel:String,
        Nummer:String,
        Beschriftung:String,
        status:String,
        Cover: String,
       Link:String
       
    }] ,
    Text:[{
        Beschreibung:String
    }]
  

    }

  }));


var message;
var rt;

const app = express();


var lo = require("./dat.js")
var ft= require("./an.js")
const { json } = require("body-parser")
app.use(express.urlencoded({extend:false}))
// Create a server object:
app.set("view engine","ejs")
app.use(express.static("views"));
app.use("/eins",eins)
app.use("/zwei",zwei)



function se(message,rt) {
    return new Promise((resolve, reject) => {
      var tr = nodemailer.createTransport({
        service: "gmail",
        auth:{
        user:"tolopoguruiko@gmail.com",
        pass: "rvtxkcjaotjjgoeg"
        }
      })
      const mails = {
        from:"tolopoguruiko@gmail.com", 
        to:"idrissatu15@gmail.com",
        
        subject:rt,
        text: message
      }
  tr.sendMail(mails, function(err, info){
    if(err) {
      return reject({message:"Nein "})
    }
    return resolve ({message:"Ja"})
  })
    })
  
  }
  var hall ="#"
  var shrink ="https://shrinke.me/Manhwas"
  

app.get("/", (req,res)=> {
   
    res.render("ha.ejs",{ft:ft, was: shrink})
    message="Eine Person hat deine Website besucht"
    rt="Website Besucher"
        se(message,rt)
})


app.get ("/Ars", (req,res) => {
    res.render("Ars.ejs")
    })
var tgh= lo[2]
var kl= lo[3]
console.log(kl)
    app.get("/top15", (req,res) => {
      User.findOne({_id:"63f0c9fad9584b2c259285ce"}, function(err, result) {
     
        res.render("le.ejs",{sat:result})
        
      });
    })
    app.get("/businessmanhwa", (req,res) => {
    User.findOne({_id:"63f0ca3a7d0c72a03a4c4d51"}, function(err, result) {
     
      res.render("le.ejs",{sat:result})
      
    });
     
    })
    app.get("/sportmanhwa", (req,res) => {
      User.findOne({_id:"63f0ca5f5ce935612319891a"}, function(err, result) {
     console.log(result)
        res.render("le.ejs",{sat:result})
        
      });
    })
    app.get ("/ManhwaSeiten", (req,res) => {
      var fk= ManhwaSeiten[0]
      res.render("ManhwaSeiten.ejs",{Manhwas: fk})
      })
      app.get ("/news", (req,res) => {
      
        var nm = "hallo"
        res.render("newer.ejs",{lk: kl})
        })
    app.post("/newsab", async(req,res)=> {
        console.log(req.body)

        const ab = `Ihr Mitteilung wurde abgeschickt Wir laden ihre Nachrichten hoch und kontaktieren ${req.body.email}`
        var fg= JSON.stringify(req.body.Verfasser)
        var df=JSON.stringify(req.body);
        message= df;
        rt= fg+" News"
        se(message,rt)
        res.render("ab.ejs",{ab: ab})
    })
    app.post("/rankingab", async(req,res)=> {
        console.log(req.body)
        message= JSON.stringify(req.body);
        var g= JSON.stringify(req.body.titel)
        rt = g+" News"
        se(message,rt)
        const ab = `Ihr Ranking wurde abgeschickt Wir laden ihre Ranking hoch und kontaktieren ${req.body.email}`
        res.render("ab.ejs",{ab: ab})
    })
    app.post("/suchen", (req,res)=> {
res.render("suchen.ejs")
    })
app.listen(process.env.PORT)

