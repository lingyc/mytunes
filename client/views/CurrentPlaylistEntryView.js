// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var CurrentPlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  events: {
    'click': function(e) {
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
