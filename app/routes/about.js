import Ember from 'ember';
import PageFadein  from '../mixins/page-fadein';

let pageName = 'About';

export default Ember.Route.extend(PageFadein, {
    model(){
        return pageName;
    }
});
