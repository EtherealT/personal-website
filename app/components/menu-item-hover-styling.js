import Ember from 'ember';

export default Ember.Component.extend({
    didRender(){
        Ember.$('.menu-item-hold').on({
            mouseenter: function () {
                var effectDiv = Ember.$('.menu-effect-div', this);
                effectDiv.css('width');
                effectDiv.css('width', '100%');
            },

            mouseleave: function () {
                var effectDiv = Ember.$('.menu-effect-div', this);
                effectDiv.css('width');
                effectDiv.css('width', '0%');
            }
        });
    }
});
