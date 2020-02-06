const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('./../models/task.model');

// GET Render homepage
router.get('/', (req, res) => {
  res.render('home');
});

// POST - redirect to /edit route
router.post('/edit', (req, res) => {
  let text;

  Task.findOne({ id: +req.body.id }, function(err, docs) {
    text = docs.text;
    req.session.item = {
      id: +req.body.id,
      text: text
    };
    res.redirect('/edit');
  });
});

// GET - gets the counter
router.get('/counter', (req, res) => {
  res.send(JSON.stringify(global.counter));
});

module.exports = router;
