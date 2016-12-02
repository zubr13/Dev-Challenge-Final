'use strict';
const angular = require('angular');

export class participantsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }

  addParticipant(){
    this.participants.push({name: this.user});
    this.user = "";
  }
}

export default angular.module('devChallengeFinalApp.participants', [])
  .component('participants', {
    template: require('./participants.component.html'),
    bindings: { participants: '<' },
    controller: participantsComponent
  })
  .name;
