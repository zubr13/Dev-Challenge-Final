'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('create-flow', {
      url: '/create-flow',
      template: '<create-flow></create-flow>'
    });
}
