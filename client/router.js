Router.route('/', function () {
  this.render('splash');
});

Router.route('/post', function() {
  this.layout('layout');
  this.render('post', {
    data: function() {
      return Posts.findOne({_id: this.params._id});
    }
  });
});
