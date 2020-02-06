const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/SimplyDB',
  {
    useNewUrlParser: true
  },
  err => {
    if (!err) {
      console.log('MongoDB connected successfully!');
    } else {
      console.log('There was an error: ' + err);
    }
  }
);

require('./task.model');
