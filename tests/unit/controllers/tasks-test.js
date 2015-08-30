import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:tasks', 'Testing tasks controller');

test('Testing canDisable computedproperty', function(assert) {
  assert.expect(4);

  // get the controller instance
  var ctrl = this.subject();

  // check the initial values of properties newTaskTitle and canDisable
  assert.equal(ctrl.get('newTaskTitle'), null);
  assert.equal(ctrl.get('canDisable'), true);
  
  // check properties with white spaces string to newTaskTitle
  ctrl.set('newTaskTitle', '    ');
  assert.equal(ctrl.get('canDisable'), true);
  
  // check with acceptable value for newTaskTitle
  ctrl.set('newTaskTitle', 'Try it');
  assert.equal(ctrl.get('canDisable'), false);
});

test('Testing isModelEmpty computedproperty', function(assert) {
  assert.expect(2);

  // get the controller instance
  var ctrl = this.subject();

  //set empty model and check isEmptyModel property
  ctrl.set('model', []);
  assert.equal(ctrl.get('isEmptyModel'), true);
  
  //set non-empty model and check isEmptyModel property
  ctrl.set('model', [{id:1},{id:2}]);
  assert.equal(ctrl.get('isEmptyModel'), false);
});