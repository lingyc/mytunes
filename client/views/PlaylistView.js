var PlaylistView = Backbone.View.extend({

  initialize: function(param) {
    this.playlistListView = new PlaylistListView(param);
    this.addPlaylistView = new AddPlaylistView(param);
    this.currentPlaylistView = new CurrentPlaylistView(param);
    this.render();
  },

  render: function() {
    return this.$el.html([
      this.playlistListView.$el,
      this.addPlaylistView.$el,
      this.currentPlaylistView.$el,
    ]);
  }
});