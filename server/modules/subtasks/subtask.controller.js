const subtaskModel = require('./subtask.model');
const Model = require('./subtask.model');

// CRUD

const create = (payload) => {
    return subtaskModel.create(payload);
};
    
const list = () => {};

const getById= (id) => {};


const updateByID = (id, payload) => {};

const remove = (id) => {};


module.exports= {create, list, getById, updateByID, remove}