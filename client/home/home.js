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

var mylat;
var mylong;

function success(pos) {
  mylat = pos.coords.latitude;
  mylong = pos.coords.longitude;

  console.log('Your current position is:');
  console.log(mylat + ' by ' + mylong);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);



if(Meteor.isClient){
Template.home.events({
  'keyup .posttext':function(evt,tmpl){
    if(evt.which === 13){
      var posttext = tmpl.find('#posttext').value;
      var options = {text:posttext, parent:null};
      Meteor.call('addPost', options);
      $('.posttext').val("").select().focus();
    }
  },
  'click .nolocate':function(tmpl){
      var posttext = document.getElementById('posttext').value;
      var options = {text:posttext, parent:null};
      Meteor.call('addPost', options);
      $('.posttext').val("").select().focus();
  },
  'click .geolocate':function(tmpl){
      var posttext = document.getElementById('posttext').value;
      var options = {text:posttext, parent:null, lat:mylat, long:mylong};
      Meteor.call('addPost', options);
      $('.posttext').val("").select().focus();
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
