const { Schema, model } = require('mongoose')

const schemaProducts = new Schema({
    timeStamp: {type: String, required:true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    category: {type:String, required: true},
    photo: {type:String, required: true},
    photoid: {type:String, required: true},
    photo2: {type: String},
    photo2id: {type: String},
    photo3: {type: String},
    photo3id: {type: String},
    price: {type:Number, required: true},
    stock: {type:Number, required: true}
},{
    versionKey: false,
})

module.exports = model('products', schemaProducts)