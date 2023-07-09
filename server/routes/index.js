const router = require('express').Router();


const routesAPI = require('./routes.api.js')

router.get("/", (req,res)=>{
    res.send("Hello Routes")
})

router.use("/api/v1", routesAPI);


module.exports = router;