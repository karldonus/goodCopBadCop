
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

//Code to be used later to map location
// var x = document.getElementById("demo");
//
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// var lat = position.coords.latitude;
// var long = position.coords.longitude;
// console.log(lat);
// console.log(long);

// // Provide your access token
//   L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
// // Create a map in the div #map
//   var map = L.mapbox.map('map', 'mapbox.streets').setView([lat, long], 13);
//     L.marker([lat, long], {
//       icon: L.mapbox.marker.icon({
//         'marker-size': 'large',
//         'marker-symbol': 'police',
//         'marker-color': '#fa0'
//       })
//     }).addTo(map);
//   var cir = L.circle([lat, long], 1000).addTo(map);
//
//   map.scrollWheelZoom.disable();
// });
