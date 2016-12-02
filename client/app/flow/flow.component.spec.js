'use strict';

describe('Component: FlowComponent', function() {
  // load the controller's module
  beforeEach(module('devChallengeFinalApp.flow'));

  var FlowComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FlowComponent = $componentController('flow', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
