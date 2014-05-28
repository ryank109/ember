EmberApp.Router.map(function () {

    this.resource('users', function() {
        this.resource('user', { path: '/:id'}, function() {
            this.resource('phones');
        });
    });

    // this.resource('users');
    // this.resource('user', { path: 'users/:id'});
});
