import Ember from "ember";

export default Ember.Route.extend({
	model : function() {
		return this.store.findAll('task');
	},
	actions: {
		goToTask : function(item) {
			this.transitionTo('taskDetails', item);
		}
	}
});