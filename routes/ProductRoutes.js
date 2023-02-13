const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.route("/").post(ProductController.createProduct).delete(ProductController.deleteAllProduct);

module.exports = router;