'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dashboard.routes';

export class DashboardComponent {
  /*@ngInject*/
  constructor(flowService) {
    this.flows = {};
    this.flowService = flowService;
    this.getFlow();
  }
  getFlow() {
    this.flowService.getFlows().then(flows => {
      this.flows = flows;
      console.log(this.flows);
    });
  }
}

export default angular.module('devChallengeFinalApp.dashboard', [uiRouter])
  .config(routes)
  .component('dashboard', {
    template: require('./dashboard.html'),
    controller: DashboardComponent,
    controllerAs: 'dashboardCtrl'
  })
  .name;
