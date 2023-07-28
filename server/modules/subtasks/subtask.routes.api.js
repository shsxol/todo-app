const router = require('express').Router();
const subtaskcontroller = require('./subtask.controller')


router.get('/', (req, res)=>{
    res.send("subtask API")
})

router.post("/", async(req, res)=>{
    const result= await subtaskcontroller.create(req.body);
    res.json({data: result})
})

module.exports = router;


