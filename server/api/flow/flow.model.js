'use strict';

import mongoose from 'mongoose';

var FlowSchema = new mongoose.Schema({
  name: String,
  info: String,
  private: Boolean,
  delete: Boolean,
  users: [String],
  msg: [{
    user: String,
    msg: String,
    date: Date
  }],
  events: [{
    date: Date,
    place: String,
    price: String,
    img: String,
    hashtags: String,
    
  }]
});

export default mongoose.model('Flow', FlowSchema);
