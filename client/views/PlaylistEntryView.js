// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'option',

  initialize: function() {
    this.render();
  },

  template: _.template('<%= title %>'),

  events: {
    'change': function(e) {
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
