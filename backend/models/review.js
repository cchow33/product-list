const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({});

module.exports.Product = mongoose.model("Review", ReviewSchema);
