import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
		return this.store.findAll('note');  // will make a GET request to the server at localhost:4500/api/notes
	}
});
