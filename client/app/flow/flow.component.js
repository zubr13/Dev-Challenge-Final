'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './flow.routes';

export class FlowComponent {
  /*@ngInject*/
  constructor() {
    this.flow = {};
  }

  getFlow() {

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
