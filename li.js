
const SneaksAPI = require('sneaks-api');
const express = require("express")
const nodemailer = require("nodemailer")
const app = express();
const schedule = require("node-schedule");
const { KeyValueStoreClient } = require('apify-client');
const sneaks = new SneaksAPI();
var t = 60
function kl(){
sneaks.getProducts("",1000, function(err, products) {
    for(i=0; i<products.length; i++) {
     if(products[i].lowestResellPrice.stockX<t) {
console.log(products[i].shoeName+" Preis "+products[i].lowestResellPrice.stockX+" Euro")
     }
    }
    
    
})
}
// kl()

var h= 3
function j() {
sneaks.getProducts("",10000, function(err, products) {
    for(i=0; i<products.length; i++) {
        var lö = products[i].lowestResellPrice.stockX-30
     
    
        if(products[i].lowestResellPrice.flightClub<100) {
            if(products[i].retailPrice>products[i].lowestResellPrice.flightClub) {
                if(products[i].lowestResellPrice.stockX<products[i].retailPrice) {

        
console.log(products[i])
     }}
        }
    }

    
})
}
j()
function gh() {
    sneaks.getProducts("",100000, function(err, products) {
        for(i=0; i<products.length; i++) {
            var lö = products[i].lowestResellPrice.stockX-60
         
         if(lö>products[i].lowestResellPrice.goat) {
            if(products[i].lowestResellPrice.goat<300) {
    
            
    console.log(products[i])
         }
        }
        }
    
        
    })
    }
    //gh()