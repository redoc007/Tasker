import Ember from "ember";
 
export default Ember.Route.extend({
	actions: {
		goToDashboard : function() {
			console.error("set active tab");
			this.transitionTo('dashboard');
		},
		goToTasks : function() {
			console.error("set active tab");
			this.transitionTo('tasks');
		}
	}
});