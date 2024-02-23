const express = require("express");
const router = express.Router();
const ProductController = require("../../controllers/product.controllers.js");
const { asyncHandle } = require("../../../helpers/asyncHander.js");

router.get("/create-product", asyncHandle(ProductController.createProduct) );
module.exports = router;
