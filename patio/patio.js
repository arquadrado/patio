

PostList = new Mongo.Collection("postList");


if (Meteor.isClient) {
  

  Template.header.helpers({
   
  });

  

  Template.posts.helpers({
    rowCount: function(){
      var postCount = PostList.find().count();
      var rowArray = [];
      for (var i = 0; i < Math.ceil(postCount/3); i++){
        rowArray.push("row" + i);
      }
      return rowArray;
    }
   
  });

  Template.postItem.helpers({
    posts: function (){
      return PostList.find();
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
