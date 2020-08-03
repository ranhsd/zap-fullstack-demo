const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const socket = io('http://localhost:3030', {timeout: 20000});
const app = feathers();

app.configure(socketio(socket));

const taskService = app.service('task');

const getTasks = async () => {
    return await taskService.find();
};

const createTask = async (payload) => {
    return await taskService.create(payload);
};

const patchTask = async (id, payload) => {
    return await taskService.patch(id, payload);
};

const subscribeToTaskCreated = (fnCallback) => {
    taskService.on('created', data => {
        fnCallback(data);
    });
};

const subscribeToTaskPatched = (fnCallback) => {
    taskService.on('patched', data => {
        fnCallback(data);
    });
};

export {
    getTasks,
    createTask,
    patchTask,
    subscribeToTaskCreated,
    subscribeToTaskPatched
};
