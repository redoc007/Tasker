import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:taskDetails', 'Testing task-details controller');

test('Testing canDisable computedproperty', function(assert) {
  assert.expect(11);

  // get the controller instance
  var ctrl = this.subject();

  // check the initial values of properties newTaskTitle and canDisable
  assert.equal(ctrl.get('newTimeLog'), null);
  assert.equal(ctrl.get('canDisable'), true);
  assert.equal(ctrl.get('showDecimalError'), false);
  
  // check properties with white spaces string to newTaskTitle
  ctrl.set('newTimeLog', '    ');
  assert.equal(ctrl.get('canDisable'), true);
  assert.equal(ctrl.get('showDecimalError'), false);
  
  //check properties with non number
  ctrl.set('newTimeLog', '  r5t  ');
  assert.equal(ctrl.get('canDisable'), true);
  assert.equal(ctrl.get('showDecimalError'), true);
  
  //check properties with invalid positive number
  ctrl.set('newTimeLog', '  -4  ');
  assert.equal(ctrl.get('canDisable'), true);
  assert.equal(ctrl.get('showDecimalError'), true);
  
  // check with acceptable value for newTaskTitle
  ctrl.set('newTimeLog', '7');
  assert.equal(ctrl.get('canDisable'), false);
  assert.equal(ctrl.get('showDecimalError'), false);
});

test('Testing noTimeEntries computedproperty', function(assert) {
  assert.expect(2);

  // get the controller instance
  var ctrl = this.subject();

  //set no time entries and check noTimeEntries property
  ctrl.set('model', {timeSpent:[]});
  assert.equal(ctrl.get('noTimeEntries'), true);
  
  //set time entries and check noTimeEntries property
  ctrl.set('model', {timeSpent:[{date:"08/30/2015", time:6}]});
  assert.equal(ctrl.get('noTimeEntries'), false);
});