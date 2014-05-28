EmberApp.PhonesRoute = Ember.Route.extend({
    userId: null,

    model: function(params, transition) {
        this.set('userId', transition.resolvedModels.user.id);
        return this.store.find('phone', {userId: this.get('userId')});
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('userId', this.get('userId'));
    }
});
