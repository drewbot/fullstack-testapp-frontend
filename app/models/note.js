import DS from 'ember-data';

// mimic noteSchema from api
export default DS.Model.extend({
  title: DS.attr('string'),
	content: DS.attr('string'),
	author: DS.attr('string')
});
