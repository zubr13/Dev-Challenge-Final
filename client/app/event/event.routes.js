'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('event', {
      url: '/event/:id',
      template: '<event></event>'
    });
}
