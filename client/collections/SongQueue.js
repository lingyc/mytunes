// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log(this);
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    var song = this.models[0];
    this.models.shift();
  }

});