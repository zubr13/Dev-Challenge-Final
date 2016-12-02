'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dashboard.routes';

export class DashboardComponent {
  /*@ngInject*/
  constructor(flowService) {
    this.flows = {};
    this.events = [];
    this.flowService = flowService;
    this.getFlow();
  }
  getFlow() {
    this.flowService.getFlows().then(flows => {
      this.flows = flows;
      flows.map(flow => flow.events.map(event => this.events = this.events.concat(event)));
      console.log(this.flows);
      console.log(this.events)
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
