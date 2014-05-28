EmberApp.PhonesController = Ember.Controller.extend({
    phoneToAdd: null,
    userId: null,

    actions: {
        addPhone: function() {
            this.set('phoneToAdd', this.store.createRecord('phone'));

            var addPhoneBtn = $('#addPhoneBtn');
            addPhoneBtn.popover({
                html: true,
                placement: 'top',
                content: '<form class="form">' + $('#addPhoneForm').html() + '</form>'
            });

            addPhoneBtn.popover('show');
        },

        deletePhone: function(phoneToDelete) {
            phoneToDelete.set('userId', this.get('userId'));
            phoneToDelete.destroyRecord();
            this.get('model').popObject(phoneToDelete);
        },

        save: function(phoneToAdd) {
            phoneToAdd.set('userId', this.get('userId'));
            phoneToAdd.save();
            $('#addPhoneBtn').popover('hide');

            this.get('model').pushObject(phoneToAdd);
        }
    }
});
