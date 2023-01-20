const productsDao = require('./products/products')
const cartDao = require('./cart/cart')
const userDao = require('./user/user')
const models = require('../../models')
const orderDao = require('./orders/order')
const {isValidPassword, createHash} = require('../../middleware/hasspass/hasspass')

module.exports = {
    productsDao: productsDao(models),
    cartDao: cartDao(models),
    userDao: userDao(models, isValidPassword, createHash),
    orderDao: orderDao(models)
}