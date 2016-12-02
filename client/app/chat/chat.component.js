'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socket, Auth, $scope) {

    this.messages = [];
    this.Auth= Auth;
    this.socket = socket.socket;
    this.user = Auth.getCurrentUserSync();

    this.socket.on('chat message', (msg) => {
        this.messages.push(msg);
        this.messageValue = '';
    });

  }

  sendMessage() {
    this.socket.emit('chat message', {date: new Date(), message: this.messageValue, author: this.user.name || 'Anon'});
    const message = this.messageValue;
    this.messageValue = '';
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { messages: '<'},
    controller: chatComponent
  })
  .name;
