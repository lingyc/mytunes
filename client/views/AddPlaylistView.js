var AddPlaylistView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  template: `<form>
              <input type="text">
              <input type="submit" value="create playlist">
            </form>`,

  events: {
    'submit': function(e) {
      e.preventDefault();
    }
  },

  render: function() {
    return this.$el.html(this.template);
  }

});