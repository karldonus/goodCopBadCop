Template.trend.upCount = function(){
  return 5;
};

Template.trend.downCount = function(){
  return 1;
};

Template.trend.posts = function(){
  return Posts.find({}, {sort:{date:-1}});
};

Template.trend.events({
  'keyup .posttext':function(evt,tmpl){
    if(evt.which === 13){
      var posttext = tmpl.find('.posttext').value;
    }
  }
})

Deps.autorun(function(){
  Meteor.subscribe("posts", Meteor.userId());
  Meteor.subscribe("upvotes", Meteor.userId());
  Meteor.subscribe("downvotes", Meteor.userId());
});
