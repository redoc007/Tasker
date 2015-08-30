import Ember from "ember";
import dataFormatter from "../helpers/dashboard-data";
 
export default Ember.Route.extend({
	model : function() {
		return this.store.findAll('task').then(function(data) {
			return dataFormatter(data);
		});
	}
});