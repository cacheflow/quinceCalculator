if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.onRendered(function(){
  // // $('head').append('<script type="text/javascript" src=".meteor/local/bower/angular/angular.js"></script>');
  //   //   $(function() {
  //   //   $("#lines").animateNumber({number: 365});
  //   // });
  // });

Template.main.events({
  "click #calculate":function(){
    $("#calculate").fadeOut();
    Session.set("firstClick", false);
    // Session.set("boothClicked", true);
    Session.set("booth", true);
  }, 

  "dblclick #calculate":function(){
    Session.set("boothClicked", false);
  },
  "click .image":function(){
    Session.set("image", true);
  }, 

  "click #booth-only":function() {
    Session.set("boothOnlyClicked", true);
  }, 

  "click #booth-with-ad":function(){
    Session.set("boothWithAdClicked", true)
  }
}); 


Template.main.helpers({
  "boothOnly":function() {
    var boothOnly = Session.get("booth");
    if (boothOnly == true) {
      return true; 
    }
    else {
      return false
    }
  }, 

  "boothWithAd":function() {
    var boothWithAd = Session.get("booth");
    if (boothWithAd == true) {
      return true; 
    }
    else {
      return false
    }
  }, 

  "isFirstClick":function(event){
    return !Session.get("firstClick");
  },

  "angularImage":function(){
    if(Session.get("image") == true){
      Session.set("boothClicked", false);
      return true; 
      $('.angular').removeClass("animate fadeInRight");
    $('.angular').removeClass("animate fadeInRight");
      }
    else {
      return false;
    }
  }
});


// Template.addPost.events({
//   'click btn':function(){
//     Session.set("visible",true)
//   }
// });
 
// Template.addPost.helpers({
//   showForm:function(){
//   var show = Session.get('visible');
//   if(show === true){
//      return true;
//   }
// });
 
//to set the session to false on refresh.

}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
