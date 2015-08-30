import Ember from "ember";

/*
 * Controller for task details. Handle of add time for a task.
 * And changing the status of task.
 */
export default Ember.Controller.extend({
	newTimeLog: null,
	
	// Set it to true  if entered time is not a positive number
	showDecimalError: false,
	
	// Used to show a message when time entries are not present for task
	noTimeEntries: Ember.computed.empty('model.timeSpent'),
	
	/*
	 * Check if entered value for time is a valid positive number
	 */
	canDisable: Ember.computed('newTimeLog', function() {
		var shouldDisable = false,
			timeLog = this.get('newTimeLog');
		if (Ember.isEmpty(timeLog)) {
			this.set('showDecimalError', false);
			shouldDisable = true;
		} else {
			timeLog = timeLog.trim();
			if (isNaN(timeLog)) {
				this.set('showDecimalError', true);
				shouldDisable = true;
			} else {
				if (parseFloat(timeLog) <= 0) {
					this.set('showDecimalError', true);
					shouldDisable = true;
				}
			}
		}
		if (!shouldDisable) {
			this.set('showDecimalError', false);
		}
	    return shouldDisable;
	}),
	
	actions: {
		/*
		 * Function to change the status of a task
		 */
		changeCompleteStatus: function() {
			this.store.findRecord('task', this.get('model.id')).then(function(task) {
				task.set('isComplete', !task.get('isComplete'));
				task.save();
			});
		},
		
		/*
		 * Function to add time entry for a task. Storing local time.
		 */
		addTimeLog: function() {
			var timeLog = parseFloat(this.get('newTimeLog').trim());
			var logEntry = {};
			logEntry.date = (new Date()).toLocaleString();
			logEntry.time = timeLog;
			var self = this;
			this.store.findRecord('task', this.get('model.id')).then(function(task) {
				task.get('timeSpent').push(logEntry);
				task.set('totalTime', task.get('totalTime') + timeLog);
				task.save();
				self.set('newTimeLog', null);
			});
		}
	}
});