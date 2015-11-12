import Ember from 'ember';

export default Ember.Route.extend({
  maxId: 3,

  model: function() {
    return [
      { id: 1, value: 'Wash the car', isDone: true },
      { id: 2, value: 'Download new episode of Fargo', isDone: false },
      { id: 3, value: 'Take Squirt to Fiesta Island', isDone: false }
    ];
  },

  actions: {
    new: function() {
      var id = this.incrementProperty('maxId');
      var content = this.get('controller.content');
      content.pushObject({
        id: id,
        value: '',
        isDone: false
      });
    }
  }
});
