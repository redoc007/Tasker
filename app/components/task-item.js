import Ember from "ember";
 
export default Ember.TextField.extend({
	tagName: 'li',
	classNames: ['list-group-item'],
	actions: {
		btnClick: function() {
			this.sendAction('action', this.get('item'));
		}
	}
	/*click: function() {
		this.sendAction('action', this.get('item'));
	}*/
});
