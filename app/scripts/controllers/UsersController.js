EmberApp.UsersController = Ember.ArrayController.extend({
    actions: {
        showDetail: function(user) {
            this.transitionToRoute('user', user);
        }
    }
});
