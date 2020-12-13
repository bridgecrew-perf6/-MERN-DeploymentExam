
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    project :{
        type: String,
        required:[true,'project required'],
        minLength:[3,'project must be at leat 3 chracters']
    },

    dueDate :{
        type: Date,
        required:[true,'Due Date required'],
    },

    status :{
        type: String,
    }

} ,{timestamps: true});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;