var PlaylistListView = Backbone.View.extend({

  tagName: 'select',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  events: {
    'change': function(e) {
      e.preventDefault();
      console.log(e.target.value);
      // this.model(e.title);
    }
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
