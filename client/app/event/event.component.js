'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './event.routes';

export class EventComponent {
  /*@ngInject*/
  constructor(flowService, $stateParams) {
    this.event = {};
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.getFlows();
  }

  getFlows() {
    this.flowService.getFlows().then(flow => {
      this.flows = flow;
      console.log(this.$stateParams)
      this.flows.map(flow => flow.events.map(event => {
        if(event._id === this.$stateParams.id) {
          this.event = event;
          console.log(this.event)
        }
      }));
    });
  }


}

export default angular.module('devChallengeFinalApp.event', [uiRouter])
  .config(routes)
  .component('event', {
    template: require('./event.html'),
    controller: EventComponent,
    controllerAs: 'eventCtrl'
  })
  .name;
