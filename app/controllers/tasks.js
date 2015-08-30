import Ember from "ember";

/*
 * Controller for tasks. Handles creation of new task.
 */
export default Ember.Controller.extend({
	newTaskTitle: null,
	
	//Used to show a message when no tasks are present
	isEmptyModel: Ember.computed.empty('model'),
	
	//Used to disable task creation if string is empty or only contains white spaces
	canDisable: Ember.computed('newTaskTitle', function() {
	    return Ember.isEmpty(this.get('newTaskTitle')) || (this.get('newTaskTitle').trim() === "");
	}),
	
	actions: {
		/*
		 * Function to create a task with title and default
		 * values and reset the newTaskTitle
		 */
		createTask: function() {
			var taskTitle = this.get('newTaskTitle').trim();
			var newTask = {
				title: taskTitle,
				timeSpent: []
			};
			this.set('newTaskTitle', null);
			var task = this.store.createRecord('task', newTask);
			task.save();
		}
	}
});