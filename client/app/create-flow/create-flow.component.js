'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create-flow.routes';

export class CreateFlowComponent {
  /*@ngInject*/
  constructor(flowService, $state) {
    this.flowService = flowService;
    this.flow = {};
    this.$state = $state;
  }

  createFlow(){
    this.flowService.createFlow(this.flow).then(flow => {
      this.$state.go('flow', { id: flow._id });
    });
  }
}

export default angular.module('devChallengeFinalApp.create-flow', [uiRouter])
  .config(routes)
  .component('createFlow', {
    template: require('./create-flow.html'),
    controller: CreateFlowComponent,
    controllerAs: 'createFlowCtrl'
  })
  .name;
