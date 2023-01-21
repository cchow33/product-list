const { id_ID } = require("faker/lib/locales");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
  // reviews: [username, text, productid ],
});

module.exports = mongoose.model("Product", ProductSchema);