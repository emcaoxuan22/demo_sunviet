"use strict";

// const { Created, SuccessResponse } = require("../core/success.response");
// const { asyncHandle } = require("../helpers/asyncHander");
const {createProduct} = require("../services/product.service");

class ProductControllers {
  createProduct = async (req, res, next) => {
    console.log("vao day ne");

    await createProduct();

    res.status(200).json("oke");
  };


}

module.exports = new ProductControllers();
