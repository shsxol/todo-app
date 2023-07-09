const router = require('express').Router();

const todosRouter = require('../modules/todos/todo.routes.api');

const subtaskRouter = require('../modules/subtasks/subtask.routes.api');


router.get("/", (req, res)=>{
    res.send('HELLo ROUTES API')
})

router.use("/todos", todosRouter);
router.use('subtasks', subtaskRouter)

module.exports = router;


