EmberApp.Phone = DS.Model.extend({
    userId: DS.attr('number'),

    type: DS.attr('string'),

    number: DS.attr('number'),

    formattedPhoneNumber: function(key, value, previousValue) {
        // setter
        if (arguments.length > 1) {
            var newValue = parseInt(value.replace(/\(|\)|-/g, ''), 10);
            this.set('number', newValue);
        }

        // getter
        if (this.get('number')) {
            var number = this.get('number').toString();
            return '(' + number.substring(0, 3) + ')' + number.substring(3, 6) + '-' + number.substring(6);
        }
        else {
            return null;
        }
    }.property('number')
});
