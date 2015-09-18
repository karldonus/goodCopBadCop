Router.route('/', function () {
  this.render('splash');
});

Router.route('/home', function() {
  this.layout('layout');
  this.render('home', {
    data: function() {
      return Posts.findOne({_id: this.params._id});
    }
  });
});
