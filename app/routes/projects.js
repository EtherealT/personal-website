import Ember from 'ember';

let pageName = 'Projects';

export default Ember.Route.extend({
    model(){
        return pageName;
    }
});
