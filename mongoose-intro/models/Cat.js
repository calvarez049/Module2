//name capital case letter and always singular

const mongoose = require ("mongoose");
// here we are getting access to Schema class from mongoose
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const catSchema = new Schema({
    // name: String
    name: {
        type: String,
        required: true
    },

    age:{
        type:Number,
        min:0,
        max:30
    },
    
    color:{
        type:String,
        minlength: 3,
        maxlength: 15
    },
    
    toys:{
        type: [{ type:String, minlength:2 }],
        country:{
            type:String,
            // reg expression that matches a string of exactly 2 uppercas letters
            match: /^[A-Z][A-Z]$/}
    },
    
    photoUrl:{
        type:String,
        //reg expresion that matches a string that starts with http or https
        match: /^https?:\/\//,
        default: ""
    }
});


//all cats in cats collection will share these properties
//Mongoose turns models name to a collection name (Cat --> cats)
const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;

// same as above just in one line
// module.exports = mongoose.model("Cat", catSchema);


