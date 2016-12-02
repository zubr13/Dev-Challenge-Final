'use strict';

describe('Component: participants', function() {
  // load the component's module
  beforeEach(module('devChallengeFinalApp.participants'));

  var participantsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    participantsComponent = $componentController('participants', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
