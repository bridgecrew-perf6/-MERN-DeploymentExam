const mongoose = require("mongoose");

const maagerSchema = new mongoose.Schema({

    name :{
        type: String,
        required:[true,'name required'],
        minLength:[3,'name must be at leat 3 chracters']
    },

    email :{
        type: String,
        required:[true,'email required'],
    },

    password :{
        type: String,
        required:[true,'password required'],
        minLength:[8,'password must be at leat 8 chracters']
    }

} ,{timestamps: true});

const Manager = mongoose.model('Manager',maagerSchema);
module.exports = Manager;