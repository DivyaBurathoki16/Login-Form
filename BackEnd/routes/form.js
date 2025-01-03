const express = require('express');
const router = express.Router();
const formcluster = require('../models/formcluster')

router.post('/login', async(req,res)=>{
    const login = await Login.create({
        fullName: req.body.fullName,
        age: req.body.age,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        address: req.body.address,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password
    })
    res.json(login)
})
module.exports = router;