const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: Number,
  text: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
