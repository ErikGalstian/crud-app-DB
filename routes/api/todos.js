const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../../models/task.model');

// POST - create new todo
router.post('/api/todos', (req, res) => {
  global.counter += 1;
  let task = new Task();
  task.id = req.body.id;
  task.text = req.body.text;
  task.save();
  console.log(`Added the document with id: ${req.body.id}`);
  res.send(`Added the document with id: ${req.body.id}`);
});

// GET - fetch all todos
router.get('/api/todos', (req, res) => {
  Task.find((err, docs) => {
    if (!err) {
      res.send([docs, global.counter]);
    }
  });
});

// PUT - send put request to update todo
router.put('/api/todos', (req, res) => {
  Task.findOne({ id: +req.body.id }, function(err, doc) {
    doc.text = req.body.text;
    doc.save();
  });
  console.log(`Updated the document with id: ${req.body.id}`);
  res.send(`Updated the document with id: ${req.body.id}`);
});

// DELETE - send delete request to remove current todo
router.delete('/api/todos', (req, res) => {
  Task.deleteOne({ id: +req.body.id }, function(err) {
    if (err) console.log(err);
    console.log('Deleted the document from Database');
  });
  res.send(`Deleted record with id: ${req.body.id}`);
});

module.exports = router;
