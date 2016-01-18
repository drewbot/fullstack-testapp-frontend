import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',  // describe the mongoDB will provide the id (_id)
  serializeId: function(id) {  // provide a method to convert to "id" which is how ember cli expects it
      return id.toString();
  }
});
