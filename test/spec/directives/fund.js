'use strict';

describe('Directive: fund', function () {

  // load the directive's module
  beforeEach(module('assignmentApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fund></fund>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fund directive');
  }));
});
