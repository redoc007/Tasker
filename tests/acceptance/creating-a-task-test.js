import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

module('Acceptance | creating a task', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /tasks', function(assert) {
  // go to tasks page
  visit('/tasks');
  // enter task name and click button
  fillIn('input', 'My new task');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/tasks');
    // check the new task added to table
    assert.equal(find('table tr:last td:nth-of-type(2)').text().trim(), 'My new task');
    // click on the task name in table to go to taskDetails page
    click('table tr:last td:nth-of-type(2) a');
    
    andThen(function() {
        assert.equal(currentRouteName(), 'taskDetails');
        // Enter time and click button
        fillIn('input', 7);
        click('button');
        
        andThen(function() {
        	// check the new time log added
        	assert.equal(find('table tr:last td:nth-of-type(2)').text().trim(), '7');
        });
      });
  });
});
