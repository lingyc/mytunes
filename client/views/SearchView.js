var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  template: `<form>
              Find song <input type="text">
                <input type="submit" value="search">
            </form>`,

  events: {
    'submit': function(e) {
      e.preventDefault();
      this.collection.query(e.target.children[0].value);
    }
  },

  render: function() {
    console.log(this.$el);
    return this.$el.html(this.template);
  }

});