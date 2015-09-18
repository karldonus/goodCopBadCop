
if(Meteor.isClient){
  Template.post.helpers({
    'upcount': function(){
      return UpVotes.find(this._id).count();
    },
    'downcount': function(){
      return DownVotes.find(this._id).count();
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
      alert(commenttext);
      var options = {text:commenttext, parent:this._id};
      Meteor.call('addPost', options);
      $('.comment').val("").select().focus();
    }
  }
});
}
