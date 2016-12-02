'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './flow.routes';

export class FlowComponent {
  /*@ngInject*/
  constructor(flowService, $stateParams, $state, Auth) {
    this.flow = {};
    this.user = Auth.getCurrentUserSync();
    this.event = {};
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.getFlow();
    this.showEventForm = false;
  }

  getFlow() {
    this.flowService.getFlow(this.$stateParams.id).then(flow => {
      this.flow = flow;
      this.flow.users.push(this.user);
    });
  }

  createEvent() {
    console.log(this.$stateParams.id);
    this.flow.events.push(this.event);
    this.flowService.createEvent(this.$stateParams.id, this.flow).then(flow => {
      return;
    })
  }

  getShowEventForm() {
    this.showEventForm = !this.showEventForm;
  }
}

export default angular.module('devChallengeFinalApp.flow', [uiRouter])
  .config(routes)
  .component('flow', {
    template: require('./flow.html'),
    controller: FlowComponent,
    controllerAs: 'flowCtrl'
  })
  .name;
