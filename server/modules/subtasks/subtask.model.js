const mongoose = require('mongoose');

const {ObjectId}= mongoose.Schema;

const subtaskSchema= mongoose.Schema({
    title: { type:String, required: true},
    status: { type:String, enums:["pending","complete"], default:  "pending" },
    todo_id: {type: ObjectId, ref: "todo"}
});

module.exports= mongoose.model("subtask",subtaskSchema)