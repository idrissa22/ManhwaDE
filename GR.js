// Erforderliche Pakete importieren
const mongoose= require("mongoose")
const assert = require('assert');
const { create } = require("domain");
const url="mongodb+srv://Idrissa:idrissa66@cluster0.tgiwf.mongodb.net/?retryWrites=true&w=majority"
const Schema= new mongoose.Schema({name: String})
const Ter= mongoose.model("Fer",Schema)
async function connect() {
    try {
       await mongoose.connect(url,{useNewUrlParser: true})
        console.log("Du bist mit der Datenbank verbunden" )
       Ter.collection.insertOne({name:"Idrissa"})

        
    }
    catch (error) {
        console.error(error)

    }
}
connect();
mongoose.set("strictQuery",true)