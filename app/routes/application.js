import Ember from "ember";

export default Ember.Route.extend({
	actions: {
		goToDashboard : function() {
			this.transitionTo('dashboard');
		},
		
		goToTasks : function() {
			this.transitionTo('tasks');
		}
	}
});