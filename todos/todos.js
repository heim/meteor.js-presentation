var Todos = new Meteor.Collection("todos");
if (Meteor.isClient) {
  Template.todos.tasks = function() {
    return Todos.find();
  };

  Template.todos.events({
    'click #add' : function (event) {
      event.preventDefault();
      Todos.insert({task: $("#task").val(), done: false});
      $("#task").val("");
    },
    'click input[type=checkbox]' : function() {
      var done = this.done;
      Todos.update(this._id, {$set: {done: !done}});
    },
    'click button' : function() {
      Todos.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
