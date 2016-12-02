'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socket, Auth, $scope, flowService) {

    this.flowService = flowService;
    this.Auth= Auth;
    this.socket = socket.socket;
    this.user = Auth.getCurrentUserSync();

    this.socket.on('chat message', (msg) => {
        this.flow.msg.push(msg);
        this.flowService.saveFlow(this.flow);
        this.messageValue = '';
    });

  }

  sendMessage() {
    const message = {date: new Date(), msg: this.messageValue, user: this.user.name || 'Anon'};
    this.socket.emit('chat message', message);
    this.messageValue = '';
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { flow: '<'},
    controller: chatComponent
  })
  .name;
