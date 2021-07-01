const mongoose = require('mongoose')

async function connect() {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/petsrank_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });

        console.log('ket noi db thanh cong')

    } catch (error) {

        console.log('ket noi db that bai')
        
    }
}

module.exports = {connect}