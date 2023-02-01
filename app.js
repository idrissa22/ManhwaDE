

const SneaksAPI = require('sneaks-api');
const express = require("express")
const nodemailer = require("nodemailer")
const app = express();
const schedule = require("node-schedule")
var sub = {
  "styleID": "CT8012-116",
  "PR": 200
}






var message;
var rt;

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
app.listen((3000),(res)=> {
  
  

  console.log("ha")
  
})







function li() {


const sneaks = new SneaksAPI();
     sneaks.getProducts("New Balance", 10, function(err, products){
  console.log("das ist drei")
  console.log(products)
  for(i= 0; i< products.length; i++) {

    if(products[i].retailPrice>products[i].lowestResellPrice.stockX) {
      console.log("Hier ist es"+products[i])
      rt="Tägliche Schuh Empfehlungen"
      message=`Name: ${products[i].shoeName} 
      Wiederverkaufs Wert:${products[i].retailPrice} Euro
      Preis bei stockX  ${products[i].lowestResellPrice.stockX }Euro`
      se(rt,message)

    }
  }
})
sneaks.getProducts("Jordan", 10, function(err, products){
  console.log("das ist drei")
  console.log(products)
  for(i= 0; i< products.length; i++) {

    if(products[i].retailPrice>products[i].lowestResellPrice.stockX) {
      console.log("Hier ist es"+products[i])
      rt="Tägliche Schuh Empfehlungen"
      message= `Name: ${products[i].shoeName} 
     Wiederverkaufs Wert:${products[i].retailPrice} Euro
     Preis bei stockX  ${products[i].lowestResellPrice.stockX } Euro`
      se(rt,message)
    }
  }
})








sneaks.getProducts("Adidas", 10, function(err, products){
  console.log("das ist drei")
  console.log(products)
  for(i= 0; i< products.length; i++) {

    if(products[i].retailPrice>products[i].lowestResellPrice.stockX) {
      console.log("Hier ist es"+products[i])
      rt="Tägliche Schuh Empfehlungen"
      message= `Name: ${products[i].shoeName} 
     Wiederverkaufs Wert:${products[i].retailPrice} Euro
     Preis bei stockX  ${products[i].lowestResellPrice.stockX } Euro`
      se(rt,message)
    }
  }
})

sneaks.getProducts("Nike", 10, function(err, products){
  console.log("das ist drei")
  console.log(products)
  for(i= 0; i< products.length; i++) {

    if(products[i].retailPrice>products[i].lowestResellPrice.stockX) {
      console.log("Hier ist es"+products[i])
      rt="Tägliche Schuh Empfehlungen"
      message= `Name: ${products[i].shoeName} 
     Wiederverkaufs Wert:${products[i].retailPrice} Euro
     Preis bei stockX  ${products[i].lowestResellPrice.stockX } Euro`
      se(rt,message)
    }
  }
})




//Product object includes styleID where you input it in the getProductPrices function
//getProductPrices(styleID, callback) takes in a style ID and returns sneaker info including a price map and more images of the product

}



schedule.scheduleJob("51 15 * * *",() => {
  console.log("Es geht die Emails werden verschickt")
  
console.log(sub)
  li()
 
})









// Home Start Bildschirm
app.get("/", function(req,res){
  res.render("home.ejs")
  
})
