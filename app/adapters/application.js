import DS from 'ember-data';

// creating a rest adapter whose api is hosted at localhost:4500 (according to the node api port variable)
export default DS.RESTAdapter.extend({
  namespace: 'api',
	host: 'http://localhost:4500'
});
