var CurrentPlaylistView = Backbone.View.extend({

  tagName: 'table',

  template: _.template('<%= title %>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // this.$el.html(this.template(this.model.attributes)).append(
    //   this.model.attributes.songs.map(function(song) {
    //     return new CurrentPlaylistEntryView({model: song}).render();
    //   })
    // );
  }

});
