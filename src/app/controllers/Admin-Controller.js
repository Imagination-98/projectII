const Product = require('../model/Product')
const User = require('../model/User')
const Cart = require('../model/Cart')

class ProductsController {
    index(req, res) {

        // Product.find({})
        //     .then(products => {
        //         products = products.map(product => product.toObject())
        //         res.render('manage', {products})
        //     } )
        //     .catch(error => next(error));

        // User.find({})
        //     .then(users => {
        //         users = users.map(user => user.toObject())
        //         res.render('manage', {users})
        //     } )
        //     .catch(error => next(error));   

        Cart.find({})
            .then(carts => {
                carts = carts.map(cart => cart.toObject())
                res.render('manage', {carts})
            } )
            .catch(error => next(error))  ;
        
        
    }

    addproduct(req, res, next) {
        res.render('addproduct')
    }

    creat(req, res, next) {
        
        const product = new Product(req.body)
        product.save()

        Product.find({})
            .then(products => {
                products = products.map(product => product.toObject())
                res.render('manage', {products})
            } )
            .catch(error => next(error));
    }

    edit(req, res, next) {
        
        Product.findOne({ product_id: req.params.id })
           .then(product => {
               product = product ? product.toObject() : product
               res.render('editproduct', {product})
           })
           .catch(next)
    }

    update(req, res, next) {

        Product.updateOne({product_id: req.body.product_id}, req.body )
            .then(() => res.redirect('/admin'))
            .catch(next)
    }
        
    
    del(req, res) {
        res.render('chat')
    }

    chat(req, res) {
        res.render('chat')
    }
}

module.exports = new ProductsController