if(Meteor.isServer){
  Meteor.publish('posts', function(userid){
    return Posts.find({});
  });
}
if(Meteor.isServer){
  Meteor.publish('upvotes', function(){
    return UpVotes.find({});
  });
}
if(Meteor.isServer){
  Meteor.publish('downvotes', function(){
    return DownVotes.find({});
  });
}
if(Meteor.isServer){
  Meteor.methods({
    //{text:'',owner:'',date:'',parent:''};
    'addPost': function(options){
      var post =     {
          text: options.text,
          owner: Meteor.userId(),
          date: new Date(),
          parent: options.parent,
          lat: options.lat,
          long: options.long
        };

      Posts.insert(post);
      console.log("created a new post: " + post);
    },
    'removePost':function(id){
      Posts.remove({_id:id});
    },
    'addUpVote': function(options){
      var vote = {
            owner: Meteor.userId(),
            date: new Date(),
            parent: options.parent
      };
      UpVotes.insert(vote);
    },
    'addDownVote': function(options){
      var vote = {
            owner: Meteor.userId(),
            date: new Date(),
            parent: options.parent
      };
      DownVotes.insert(vote);
    }
  });
}
