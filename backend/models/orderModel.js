const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {type: String, required:true},
    phoneNumber: {type:String, required: true},
    email: {type:String, required: true},
    ocassion: {type: String, required:true},
    description: {type:String, required: true},
    type: {type:String, required: true},
    date: {type:String},
});

module.exports = Order = mongoose.model("Order", orderSchema);