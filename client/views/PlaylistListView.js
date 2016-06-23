var PlaylistListView = Backbone.View.extend({

  tagName: 'select',

  initialize: function() {
    this.render();
  },

  render: function() {
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(playlist) {
        return new PlaylistEntryView({model: playlist}).render();
      })
    );
  }

});
