'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socket) {

    this.messages = [];
    this.socket = socket.socket;

    this.socket.on('chat message', (msg) => {
        this.messages.push(msg);
        this.messageValue = '';
        console.log(this.messages);
    });

  }

  sendMessage() {
    this.socket.emit('chat message', {date: new Date(), message: this.messageValue, author: this.user || 'Anon'});
    const message = this.messageValue;
    this.messageValue = '';
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { messages: '<', session: '<', user: '<'},
    controller: chatComponent
  })
  .name;
