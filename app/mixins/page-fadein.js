import Ember from 'ember';

export default Ember.Mixin.create({
    activate () {
        Ember.run.scheduleOnce('afterRender', this, function() {
            Ember.$('#page-wrapper').fadeIn(600);
        });
    }
});
