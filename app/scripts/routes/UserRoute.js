EmberApp.UserRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('user', params.id);
    }
});

EmberApp.UserIndexRoute = EmberApp.UserRoute.extend({
    beforeModel: function() {
        this.transitionTo('phones');
    }
});
