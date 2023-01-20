const Dao = require("../dal/Dao")
const productService = require("./products/products")
const cartServices = require('./cart/cart')
const orderServices = require('./orders/order')
module.exports = {
    productService: productService(Dao), 
    cartServices: cartServices(Dao),
    orderServices: orderServices(Dao)
}