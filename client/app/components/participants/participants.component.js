'use strict';
const angular = require('angular');

export class participantsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('devChallengeFinalApp.participants', [])
  .component('participants', {
    template: require('./participants.component.html'),
    bindings: { participants: '<' },
    controller: participantsComponent
  })
  .name;
