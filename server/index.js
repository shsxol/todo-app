const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/todo-app").then(()=>{
    console.log("Database connection")
})
const indexRouter = require('./routes');

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT,()=>{
    console.log("Server running on port 3000");
})