Meteor.publish('posts', function(userid){
  return Posts.find({});
});
Meteor.publish('downvotes', function(){
  return UpVotes.find({post:postid});
});
Meteor.publish('upvotes', function(){
  return DownVotes.find({post:postid});
});

Meteor.methods({
  //{text:'',owner:'',date:'',parent:''};
  'addPost': function(options){
    var post =     {
        text: options.text,
        owner: Meteor.userId(),
        date: new Date(),
        parent: options.parent
      };

    Posts.insert(post);
    console.log("created a new post: " + post);
  },
  'removePost':function(id){
    Posts.remove({_id:id});
  }
});
