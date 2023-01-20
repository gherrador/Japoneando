const productServices = (Dao) => {
    const { productsDao } = Dao
    try {
        return {
            listProducts() {
                return productsDao.getProducts()
            },
            saveProduct(data, urlPhoto1, urlPhoto2, urlPhoto3){                
                return productsDao.saveProducts(data, urlPhoto1, urlPhoto2, urlPhoto3)
            },
            updateById(id, data, urlPhoto1, urlPhoto2, urlPhoto3){
                return productsDao.updateById(id, data, urlPhoto1, urlPhoto2, urlPhoto3)
            },
            updateAfterBuy(data){
                return productsDao.updateAfterBuy(data)
            },
            deleteById(id){
                return productsDao.deleteById(id)
            },
            listById(id){
                return productsDao.listById(id)
            },
            listByCategory(category){
                return productsDao.listByCategory(category)
            }
        }
    } catch {
        throw new Error ('an error occurred while operation')
    }
}

module.exports = productServices