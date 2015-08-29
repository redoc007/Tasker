import Ember from "ember";
import formatDate from "../helpers/date-format";
import last7Days from "../helpers/seven-days";
 
export default Ember.Route.extend({
	model : function() {
	    return $.ajax('http://localhost:3000/tasks', {
		  method: 'GET'
		}).then(function(tasksData) {
			var sevenDays = last7Days();
			var columns = [];
			columns.push({name:"Task"});
			sevenDays.forEach(function(item) {
				columns.push({name : item});
			});
			columns.push({name:"Total"});
			var data = [];
			tasksData.forEach(function(item) {
				var obj = {};
				obj.title = item.title;
				obj.id = item.id;
				obj.total = 0;
				var values = [];
				sevenDays.forEach(function(d) {
					var val = {};
					val.date = d;
					val.value = 0;
					values.push(val);
				});
				item.timeSpent.forEach(function(timeItem) {
					if(sevenDays.contains(timeItem.date)) {
						values.forEach(function(addVal) {
							if (addVal.date === timeItem.date) {
								addVal.value = addVal.value + timeItem.time;
							}
						});
						obj.total = obj.total + timeItem.time;
					}
				});
				obj.values = values;
				data.push(obj);
			});
			console.log("columns are ", columns);
			console.log("data is ", data);
			return {
				columns : columns,
				data : data
			};
		});
	}
});