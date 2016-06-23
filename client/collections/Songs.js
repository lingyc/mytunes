// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;
    $.get('https://api.parse.com/1/classes/songs', function(data) {
      console.log(data);
      that.add(data.results);
  
    });
  },

  query: function(param) {
    var that = this;
    $.get('https://api.parse.com/1/classes/songs',
      `where={"title":{"$regex":"${param}","$options":"i"}}`, 
        function(data) {
          console.log(data);
          that.reset(data.results);
        });
  }

});