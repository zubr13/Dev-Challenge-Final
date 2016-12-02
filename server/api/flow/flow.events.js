/**
 * Flow model events
 */

'use strict';

import {EventEmitter} from 'events';
import Flow from './flow.model';
var FlowEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FlowEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Flow.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FlowEvents.emit(event + ':' + doc._id, doc);
    FlowEvents.emit(event, doc);
  };
}

export default FlowEvents;
