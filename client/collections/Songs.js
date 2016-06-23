// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;
    $.get('https://api.parse.com/1/classes/songs', function(data) {
      that.add(data.results);
  
    });

  }

});