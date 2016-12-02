'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './event.routes';

export class EventComponent {
  /*@ngInject*/
  constructor(flowService, Auth, $stateParams) {
    this.event = {};
    this.Auth = Auth;
    this.flow = {};
    this.onEvent = false;
    this.user = Auth.getCurrentUserSync();
    this.flowService = flowService;
    this.$stateParams = $stateParams;
    this.getFlows();
  }

  goToEvent() {
    // console.log(this.flow._id, this.event, this.user._id);
    this.event.users.push(this.user._id);
    this.flow.events.push(this.event);
    this.flowService.saveEventSign(this.flow);
  }

  getFlows() {
    this.flowService.getFlows().then(flow => {
      this.flows = flow;
      this.flows.map(flow => {
        this.flow = flow;
        flow.events.map(event => {
        if(event._id === this.$stateParams.id) {
          this.event = event;
          if(event.users.includes(this.user._id))
            this.onEvent = true;
          //  console.log(this.user._id);
        }
      })});
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
