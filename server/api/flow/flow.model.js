'use strict';

import mongoose from 'mongoose';

var FlowSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  private: Boolean,
  img: String,
  delete: Boolean,
  users: [String],
  msg: [{
    user: String,
    msg: String,
    date: {type: Date, default: Date.now}
  }],
  events: [{
    name: String,
    description: String,
    date: {type: Date, default: Date.now},
    place: String,
    price: String,
    img: String,
    hashtags: [String]
  }]
});

export default mongoose.model('Flow', FlowSchema);
