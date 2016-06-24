var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,

  initialize: function() {

  },

  setCurrentPlaylist: function(title) {
    this.set('currentPlaylist', title);
  }

});