'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create-flow.routes';

export class CreateFlowComponent {
  /*@ngInject*/
  constructor() {

  }

  createFlow(){
    
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
