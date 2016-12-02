'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('flow', {
      url: '/flow/:id',
      template: '<flow></flow>'
    });
}
