const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')

// admin/add-product => GET
router.get('/admin',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

//admin/add-product => POST
router.post("/admin/add-product",(req,res)=>{
    res.redirect('/') 
})

module.exports = router