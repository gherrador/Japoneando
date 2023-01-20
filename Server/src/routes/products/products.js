const router = require('express').Router();
const { productsControllers } = require("../../controllers");

module.exports = routerProducts = () => {
    router        
        .get("/list", productsControllers.listProducts)
        .post("/save", productsControllers.saveProducts)
        .put("/update/:id", productsControllers.updateById)
        .delete("/delete/:id", productsControllers.deleteById)
        .get("/detail/:id", productsControllers.listById)
        .get("/category/:id", productsControllers.listByCategory)        
    return router;
};