import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('tasks', { path: '/tasks' });
	this.route('taskDetails', { path: '/task/:id' });
	this.route('dashboard', { path: '/dashboard' });
});

export default Router;
