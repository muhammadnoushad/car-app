const  mongoose = require('mongoose');

const ProviderScehma = mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    image:{
        type : String,
        required:true
    },
    email:{
        type : String,
        required:true
    
   },
    phone:{
        type : String,
        required:true
        
    },
    

    }) 

module.exports = mongoose.model('Provider',ProviderScehma);