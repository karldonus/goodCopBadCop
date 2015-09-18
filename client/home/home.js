// old way that's depricated
// Template.home.posts = function(){
//     return Posts.find({parent:null},{sort:{date:-1}});
//   };

// new way of rendering
if(Meteor.isClient){
  Template.home.helpers({
    'posts': function(){
      return Posts.find({parent:null},{sort:{date:-1}});
    }
  });
}


if(Meteor.isClient){
Template.home.events({
  'keyup .posttext':function(evt,tmpl){
    if(evt.which === 13){
      var posttext = tmpl.find('.posttext').value;
      var options = {text:posttext, parent:null};
      Meteor.call('addPost', options);
      $('.posttext').val("").select().focus();
    }
  },
  'click .delete':function(){
    Meteor.call('removePost', this._id);
  }
});
}
if(Meteor.isClient){
Template.home.rendered = function(){
  Deps.autorun(function(){
    Meteor.subscribe("posts", Meteor.userId());
    Meteor.subscribe("upvotes");
    Meteor.subscribe("downvotes");
  });
};
}
