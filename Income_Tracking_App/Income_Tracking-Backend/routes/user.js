const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')

router.get('/', async(req, res) => {
    try{
        const user = await User.find({email : req.query.email})
        console.log(user[0]);
        console.log(user[0].email);
        console.log(req.query.email);
        if(req.query.email == null){
            res.json("Empty Fields"+ err)
        }
        if(user[0].email == req.query.email){
            if(user[0].password == req.query.password){
                console.log(user[0].password)
                console.log(req.query.password)
                res.json(user[0])
            }else{
                res.json(false)
            }
        }else{
            res.json("email not found" + err)
        }
       
    }catch(err){
        res.send("Error : "+err)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password
    })
    try {
        const us = await user.save()
        res.json(true)
        console.log(us);
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router