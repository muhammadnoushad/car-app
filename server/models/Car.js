const  mongoose = require('mongoose');

const CarScehma = mongoose.Schema({
    title:{
        type : String,
        required:true
    },
    image:{
        type : String,
        required:true
    },
    fuel:{
        type : String,
        required:true
    },
    availablity:{
        type : Boolean,
        default:true,
        
    },
    actual_price:{
        type : Number,
        required:true
        
    },
    offer_price:{
        type : Number,
        required:true
       
    },
    total_door:{
        type : Number,
        required:true
       
    },
    total_person:{
        type : Number,
        required:true
       
    },
    total_luggage:{
        type : Number,
        required:true
       
    },
    ac:{
        type : Boolean,
        required:true
       
    },
    type:{
        type : String,
        required:true
       },

    date : {
        type : Date,
        default:Date.now()
    },
    providers : 
        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }],
    }) 

module.exports = mongoose.model('Car',CarScehma);