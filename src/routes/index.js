const productRouter = require('./products')
const siteRouter = require('./site')
const userRouter = require('./user')
const adminRouter = require('./admin')


function route (app) {
   
    //USER
    app.use('/user', userRouter)


    //PRODUCTS
    app.use('/products', productRouter)
 
    
    //ADMIN
    app.use('/admin', adminRouter)


    //SITE

    app.use('/', siteRouter)
 

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
    
    // app.post('/search', (req, res) => {
    //     res.render('search');
    // })
    

    
    // app.get('/cart', (req, res) => {
    //     res.render('cart');
    // })
    
    // app.get('/payment', (req, res) => {
    //     res.render('payment');
    // })
    
    // app.get('/chat', (req, res) => {
    //     res.render('chat');
    // })
    
    // app.get('/manage', (req, res) => {
    //     res.render('manage');
    // })
    
    // app.get('/add-product', (req, res) => {
    //     res.render('addproduct');
    // })
  
}

module.exports = route;