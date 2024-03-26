const router = require("express").Router();
const { faker } = require("@faker-js/faker");
const Product = require("../models/product");
const Review = require("../models/review");

// Generate fake data
router.get("/generate-fake-data", (req, res, next) => {
  for (let i = 0; i < 90; i++) {
    let product = new Product();

    product.category = faker.commerce.department();
    product.name = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.image = "http://via.placeholder.com/250?text=Product+Image";
  }
});
