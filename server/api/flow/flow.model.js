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
  }]
});

export default mongoose.model('Flow', FlowSchema);
