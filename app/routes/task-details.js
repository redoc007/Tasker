import Ember from "ember";
 
export default Ember.Route.extend({
	model: function(params) {
		return $.ajax('http://localhost:3000/tasks/' + params.id, {
		  method: 'GET'
		}).then(function(data) {
		  return data;
		});
	},
	afterModel: function(model){
		console.log("In afterModel ", model);
		console.error("Sort date entries by date");
	}
});
