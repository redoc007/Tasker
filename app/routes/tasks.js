import Ember from "ember";
 
export default Ember.Route.extend({
	model : function() {
		return $.ajax('http://localhost:3000/tasks', {
		  method: 'GET'
		}).then(function(data) {
			return data;
		});
	},
	actions: {
		goToTask : function(item) {
			this.transitionTo('taskDetails', item);
		}
	}
});