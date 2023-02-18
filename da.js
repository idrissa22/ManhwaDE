const express = require("express");
const { ObjectID } = require("mongodb");
const connectstring="mongodb+srv://idrissa:idrissa66@sneakerdatabase.ed71nwg.mongodb.net/Taskmanager?retryWrites=true&w=majority"
const mongoose=require("mongoose")
mongoose
.connect(connectstring
    

)
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
  
  