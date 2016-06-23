// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    this.model.on('change:playCount', this.render, this);
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  events: {
    'click': function(e) {
      this.model.enqueue(e);
    }
  },

  render: function() {
    console.log(this.model);
    return this.$el.html(this.template(this.model.attributes));
  }

});
