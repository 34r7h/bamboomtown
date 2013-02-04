'use strict';

describe('Controller: MediaCtrl', function() {

  // load the controller's module
  beforeEach(module('bamboomtown2App'));

  var MediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MediaCtrl = $controller('MediaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
