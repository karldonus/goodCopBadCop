Meteor.publish('posts', function(userid){
  return Posts.find({});
});
Meteor.publish('downvotes', function(){
  return UpVotes.find({post:postid});
});
Meteor.publish('upvotes', function(){
  return DownVotes.find({post:postid});
});
