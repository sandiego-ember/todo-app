import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['todo-item-component'],
  classNameBindings: ['status:is-done:not-done'],

  isFocused: false,

  status: Ember.computed('todo.isDone', function() {
    return this.get('todo.isDone');
  }),

  focusOut: function() {
    this.set('isFocused', false);
  },

  click: function() {
    this.set('isFocused', true);
  }
});
