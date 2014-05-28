EmberApp.UserController = Ember.Controller.extend({
    actions: {
        save: function(user) {
            user.save();
        }
    }
});
