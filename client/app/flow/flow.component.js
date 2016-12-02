'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './flow.routes';

export class FlowComponent {
  /*@ngInject*/
  constructor(flowService, $stateParams, $state, Auth) {
    this.flow = {};
    this.user = Auth.getCurrentUserSync();
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.getFlow();
  }

  getFlow() {
    this.flowService.getFlow(this.$stateParams.id).then(flow => {
      this.flow = flow;
      this.flow.users.push(this.user);
    });
  }

  createEvent() {
    this.flowService.createEvent(this.$stateParams.id).then(event => {
      this.$state.go('event', { id: event._id });
    })
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
