import Ember from "ember";
import taskItem from "../models/task-item";

export default Ember.Controller.extend({
	newTaskTitle: null,
	canDisable: Ember.computed('newTaskTitle', function() {
	    return Ember.isEmpty(this.get('newTaskTitle'));
	}),
	actions: {
		createTask: function() {
			var taskTitle = this.get('newTaskTitle').trim();
			var newTask = taskItem.create({
				title: taskTitle,
				timeSpent: Ember.A()
			});
			this.set('newTaskTitle', null);
			
			console.log("new Entry is ", newTask);
			//TODO
			$.ajax('http://localhost:3000/tasks/', newTask, {
			  method: 'POST'
			}).then(function(data) {
			  console.log("saved data is ", data);
			  // transnsit to that task
			});
		}
	}
});