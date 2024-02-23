const { Product } = require('../models/index'); 

async function createProduct() {
    try {
      const product = await Product.create({
        name: 'New Product',
        description: 'This is a new product',
        price: 99.99
      });
      console.log('Product created:', product);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }
  
module.exports = {createProduct}