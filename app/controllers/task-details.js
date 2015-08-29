import Ember from "ember";

export default Ember.Controller.extend({
	newTimeLog: null,
	showDecimalError: false,
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
		addTimeLog: function() {
			var timeLog = parseFloat(this.get('newTimeLog').trim());
			var logEntry = {};
			logEntry.date = new Date();
			console.error("Finalize date format");
			logEntry.time = timeLog;
			var taskToUpdate = this.get('model');
			console.log("Time entry before update ", taskToUpdate);
			taskToUpdate.totalTime = taskToUpdate.totalTime + timeLog;
			taskToUpdate.timeSpent.push(logEntry);
			console.log("Time entry to be updated ", taskToUpdate);
			this.set('newTimeLog', null);
			//TODO ajax or LSAdapater and if needed reload/reroute
			console.error("Finish Implementation");
			this.transitionToRoute('taskDetails', taskToUpdate);
		}
	}
});