const router = require('express').Router()
const productController = require('../controllers/productController')

router.route('/products')
  .get(productController.getProducts)
  .post(productController.createProduct)

router.route('/products/:id')
  .get(productController.getProduct)
  .delete(productController.deleteProduct)
  .put(productController.updateProduct)

router.patch('/addcart', productController.addToCart)

module.exports = router