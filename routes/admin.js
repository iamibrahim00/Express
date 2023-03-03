const express= require('express');
const router = express.Router()

// admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log("In the Middleware")
    res.send('<form action ="/admin/add-product" method="POST"><input type="text" name="title"> <input type="text" name="Size"><button type="submit">Add</button></form>')
});

//admin/add-product => POST
router.post("/add-product",(req,res)=>{
    console.log(req.body)
    res.redirect('/') 
})

module.exports = router