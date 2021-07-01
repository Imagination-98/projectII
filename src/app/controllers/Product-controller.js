const Product = require('../model/Product')


class ProductsController {
    

    detail(req, res, next) {
        
         Product.findOne({ product_id: req.params.id })
            .then(product => {
                product = product ? product.toObject() : product
                res.render('products', {product})
            })
            .catch(next)
    }

    
}

module.exports = new ProductsController