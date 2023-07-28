const router = require('express').Router();

const todoController= require("./todo.controller")


router.get('/', (req, res)=>{
    res.send("Todo API")
});

router.post("/",async(req,res ) =>{
    const todoResult = await todoController.create(req.body);
    res.json({data: todoResult});
});


module.exports = router;


