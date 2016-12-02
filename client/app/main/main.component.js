import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import chat from '../chat/chat.component';

export class MainController {

  /*@ngInject*/
  constructor($http, $scope, socket, flowService) {
    this.$http = $http;
    this.socket = socket;
    this.flowService = flowService;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    this.flows = [];
    this.getFlows();
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  getFlows(){
    this.flowService.getFlows().then(flows => {
      this.flows = flows;
    })
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('devchallengeApp.main', [uiRouter, chat])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
