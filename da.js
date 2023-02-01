const SneaksAPI = require('sneaks-api');
const express = require("express")
const nodemailer = require("nodemailer")
const app = express();
const schedule = require("node-schedule");
const { KeyValueStoreClient } = require('apify-client');
const sneaks = new SneaksAPI();
sneaks.getProductPrices("504750-660", function(err, product){
    console.log(product)
})