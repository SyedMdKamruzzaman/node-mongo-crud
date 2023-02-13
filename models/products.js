const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:String,
    unit:String,
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:Date
});

module.exports = mongoose.model("products",productSchema);