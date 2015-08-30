import DS from "ember-data";

export default DS.Model.extend({
	title: DS.attr('string'),
	isComplete: DS.attr('boolean', {defaultValue: false}),
	totalTime: DS.attr('number', {defaultValue: 0}),
	timeSpent: DS.attr()
});
