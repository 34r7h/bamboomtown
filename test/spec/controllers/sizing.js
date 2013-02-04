'use strict';

describe('Controller: SizingCtrl', function() {

  // load the controller's module
  beforeEach(module('bamboomtown2App'));

  var SizingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SizingCtrl = $controller('SizingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
