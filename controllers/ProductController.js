const productService = require('../services/ProductService');

exports.createProductAuto = async(req) =>{        
    console.log(req);
    try{
        const product = await productService.createProduct(req);
        
    }catch(err){
        console.log(err.message);
    }
};


exports.createProduct = async(req,res) =>{    
    
    try{
        const product = await productService.createProduct(req.body);
        res.json({data:product, status:"success"})
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.deleteAllProduct = async(req,res) =>{
    try {
        const product = await productService.deleteAllProduct();
        res.json({data:product, status:'Success'})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

exports.delAllProduct = async(req) =>{
    console.log(req);
    try {
        const product = await productService.deleteAllProduct();
        console.log('All products deleted on '+ new Date());
    } catch (error) {
        console.log(error.message);
    }

};