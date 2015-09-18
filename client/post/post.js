
if(Meteor.isClient){
  Template.post.helpers({
    'upCount': function(){
      return UpVotes.find({parent:this._id}).count();
    },
    'downCount': function(){
      return DownVotes.find({parent:this._id}).count();
    },
    'postComments': function(){
      return Posts.find({parent:this._id});
    }
  });
}

if(Meteor.isClient){
Template.post.events({
  'keyup .comment':function(evt,tmpl){
    if(evt.which === 13){
      var commenttext = tmpl.find('.comment').value;
      var options = {text:commenttext, parent:this._id};
      Meteor.call('addPost', options);
      $('.comment').val("").select().focus();
    }
  },
  'click .upVote':function(){
    var options = {parent:this._id};
    Meteor.call('addUpVote', options);
  },
  'click .downVote':function(){
    var options = {parent:this._id};
    Meteor.call('addDownVote', options);
  }
});
}
