EmberApp.User = DS.Model.extend({
    username: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    phones: DS.hasMany('phone')
});
