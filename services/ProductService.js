const ProductModel = require('../models/products');

exports.getAllProducts = async() => {
    return await ProductModel.find();
}

exports.createProduct = async(product) => {
    return await ProductModel.create(product);
}

exports.deleteAllProduct = async() => {
    return await ProductModel.deleteMany();
}