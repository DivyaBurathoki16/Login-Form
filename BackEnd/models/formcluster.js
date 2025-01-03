const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type : String ,
        required: true
    },
    contactNumber:{
         type: String,
         required: true
    },
    password:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('formcluster' ,formSchema)