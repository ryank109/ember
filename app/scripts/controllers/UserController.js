EmberApp.UserController = Ember.Controller.extend({
    needs: 'phones',
    actions: {
        save: function(user) {
            this.get('controllers.phones.model').save();
            user.save();
        }
    }
});
