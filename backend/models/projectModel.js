const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type:String, required: true},
    type: {type:String, required: true},
    ocassion: {type:String},
    imageData: {type: String}
    // required: true},
});

module.exports = Project= mongoose.model("Project", projectSchema);