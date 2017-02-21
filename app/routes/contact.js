import Ember from 'ember';
import PageFadein  from '../mixins/page-fadein';

let pageName = 'Contact';

export default Ember.Route.extend(PageFadein, {
    model(){
        return pageName;
    }
});
