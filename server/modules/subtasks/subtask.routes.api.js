const router = require('express').Router();


router.get('/', (req, res)=>{
    res.send("subtask API")
})


module.exports = router;


