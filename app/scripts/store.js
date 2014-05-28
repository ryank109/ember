EmberApp.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
    pathForType: function(type) {
        return type;
    }
});

EmberApp.ApplicationSerializer = DS.RESTSerializer.extend({
    serializeIntoHash: function(hash, type, record, options) {
        var root = Ember.String.camelize(type.typeKey);
        $.extend(true, hash, this.serialize(record, options));
    },

    normalizePayload: function(type, payload) {
        var typeKey = type.typeKey;
        var ret = new Object();
        ret[typeKey] = payload;
        return ret;
    }
});
