const productsController = (service, save, destroy) => {
    const { productService } = service
    try {
        return {
            async listProducts(req, res) {
                try {
                    const list = await productService.listProducts()
                    res.status(200).send(list)
                } catch (err) {
                    res.status(400).send(`something go wrong! ${err}`)
                }
            },
            async saveProducts(req, res) {
                const photo = req.files?.photo? await save(req.files.photo): false
                const photo2 = req.files?.photo2? await save(req.files.photo2): false
                const photo3 = req.files?.photo3? await save(req.files.photo3): false
                let productSave = await productService.saveProduct(req.body, photo, photo2, photo3)        
                res.status(200).send(productSave)
            },

            async updateById(req, res) {
                const id = req.params.id                
                const photo = req.files?.photo? await save(req.files.photo): false
                const photo2 = req.files?.photo2 ? await save(req.files.photo2): false
                const photo3 = req.files?.photo3? await save(req.files.photo3): false
                const data = req.body
                await destroy(data)
                await productService.updateById(id, data, photo, photo2, photo3)
                res.status(200).send('updated product')
             },
            async deleteById(req, res) {
                const id = req.params.id
                const productDelete = await productService.deleteById(id)   
                await destroy([productDelete.photoid])      
                res.status(200).send(productDelete)
             },
            
            async listById(req, res) {
                const id = req.params.id
                const productById = await productService.listById(id)
                res.status(200).send(productById)
            },
            async listByCategory(req, res) {
                const category = req.params.id
                const productById = await productService.listByCategory(category)
                res.status(200).send(productById)
            }
        }
    } catch (err) {
        res.status(400).send(`An error has occurred during the process. ${err}`)
    }
}

module.exports = productsController