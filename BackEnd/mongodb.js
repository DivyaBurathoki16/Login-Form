const mongoose = require('mongoose');
const mongoURI = ''

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(console.log('Connected to Mongo'))
    .catch((error)=>console.log(error.message));
}
module.exports= connectToMongo;