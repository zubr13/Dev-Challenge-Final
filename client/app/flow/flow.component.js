'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './flow.routes';

export class FlowComponent {
  /*@ngInject*/
  constructor(flowService, $stateParams) {
    this.flow = {};
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.getFlow();
  }

  getFlow() {
    this.flowService.getFlow(this.$stateParams.id).then(flow => {
      this.flow = flow;
    });
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
