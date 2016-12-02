'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './event.routes';

export class EventComponent {
  /*@ngInject*/
  constructor(flowService, Auth, $stateParams) {
    this.event = {};
    this.Auth = Auth;
    this.user = Auth.getCurrentUserSync();
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.getFlows();
  }

  goToEvent() {
    this.flowService.saveEventSign(this.event, this.user);
  }

  getFlows() {
    this.flowService.getFlows().then(flow => {
      this.flows = flow;
      this.flows.map(flow => flow.events.map(event => {
        if(event._id === this.$stateParams.id) {
          this.event = event;
          console.log(this.user);
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
