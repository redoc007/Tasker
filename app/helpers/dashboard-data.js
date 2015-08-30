import last7Days from "../helpers/seven-days";
import formatDate from "../helpers/date-format";

/*
 * Function to convert array of tasks into a format
 * suitable to show in a table. Table shows the breakdown
 * of time of each task across last seven days.
 */
export default function(dataContent) {
	var tasksData = [];
	// get data from store content for tasks. Store returns promiseArray.
	dataContent.content.forEach(function(item) {
		var d = item._data;
		d.id = item.id;
		tasksData.push(d);
	});
	// get array of last seven days
	var sevenDays = last7Days();
	// prepare column headings for table.
	// 'task', dates, "Total" are the table headings
	var columns = [];
	columns.push({name:"Task"});
	sevenDays.forEach(function(item) {
		columns.push({name : item});
	});
	columns.push({name:"Total"});
	// convert data suitable for table
	var data = [];
	
	// values for each task (as in row of table)
	tasksData.forEach(function(item) {
		// Create default row object
		var obj = {};
		obj.title = item.title;
		obj.id = item.id;
		obj.total = 0;
		var values = [];
		
		// create default values for last seven days
		sevenDays.forEach(function(d) {
			var val = {};
			val.date = d;
			val.value = 0;
			values.push(val);
		});
		
		// for each time log of a task
		item.timeSpent.forEach(function(timeItem) {
			// check if time log is from last seven days
			if(sevenDays.contains(formatDate(timeItem.date))) {
				// add time to appropriate date
				values.forEach(function(addVal) {
					if (addVal.date === formatDate(timeItem.date)) {
						addVal.value = addVal.value + timeItem.time;
					}
				});
				// maintain total time spent on a task in last seven days.
				obj.total = obj.total + timeItem.time;
			}
		});
		// add last seven days time break down to a task(as in row)
		obj.values = values;
		// add this task(row) to table content(set of rows)
		data.push(obj);
	});
	return {
		columns : columns,	// column headings
		data : data	// table rows
	};
}