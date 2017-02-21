import Ember from 'ember';

let pageName = 'About';

export default Ember.Route.extend({
    model(){
        return pageName;
    }
});
