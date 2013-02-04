'use strict';

describe('Controller: ReviewsCtrl', function() {

  // load the controller's module
  beforeEach(module('bamboomtown2App'));

  var ReviewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ReviewsCtrl = $controller('ReviewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
