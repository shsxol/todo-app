const TodoModel = require('./todo.model');

// CRUD

const create = (payload) => {
    return TodoModel.create(payload);
};
    
const list = () => {
    return TodoModel.list();
};

const getById= (id) => {};


const updateByID = (id, payload) => {};

const remove = (id) => {};


module.exports= {create, list, getById, updateByID, remove}