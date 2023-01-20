const productsDao = (model) => {
    const { productsModel } = model
    try {
        return {
            async getProducts() {
                return await productsModel.find({}).lean()
            },
            async saveProducts(data, urlPhoto1, urlPhoto2, urlPhoto3) {
                const product = new productsModel({
                    timeStamp: Date.now(),
                    name: data.name,
                    description: data.description,
                    code: data.code,
                    category: data.category,
                    photo: urlPhoto1.url,
                    photoid: urlPhoto1.id,
                    photo2: urlPhoto2.url,
                    photo2id: urlPhoto2.id,
                    photo3: urlPhoto3.url,
                    photo3id: urlPhoto3.id,
                    price: data.price,
                    stock: data.stock
                })
                return await product.save()
            },
            async updateById(id, data, photo, photo2, photo3) {
                return await productsModel.updateOne({ _id: id }, {
                    $set: {
                        name: data.name,
                        description: data.description,
                        code: data.code,
                        category: data.category,
                        photo: photo.url,
                        photoid: photo.id,
                        photo2: photo2.url,
                        photo2id: photo2.id,
                        photo3: photo3.url,
                        photo3id: photo3.id,
                        price: data.price,
                        stock: data.stock
                    }
                })
            },
            updateAfterBuy: async (data) => {
                const product = await productsModel.findById(data.id)
                product.stock = product.stock - data.count
                return await product.save()
            },
            async deleteById(id) {
                let response = await productsModel.findOneAndRemove({ _id: id })
                return response
            },
            async listById(id) {
                const productById = await productsModel.findOne({ _id: id }).lean()
                return productById

            },
            async listByCategory(category) {
                const productByCategory = await productsModel.find({ category: category }).lean();
                return productByCategory
            }
        }
    } catch {
        throw new Error("an error has ocurrend during the process.")
    }
}

module.exports = productsDao