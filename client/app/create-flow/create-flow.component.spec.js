'use strict';

describe('Component: CreateFlowComponent', function() {
  // load the controller's module
  beforeEach(module('devChallengeFinalApp.create-flow'));

  var CreateFlowComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CreateFlowComponent = $componentController('create-flow', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
