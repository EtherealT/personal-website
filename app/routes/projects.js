import Ember from 'ember';
import PageFadein  from '../mixins/page-fadein';

let pageName = 'Projects';
let projects = [
    {
        title: 'Veedigo',
        description: 'Veedigo is a platform engineered to help college students in Budapest Hungary, by providing some services that aid student life. This is a collaborative project with Harry Otemelate.',
        url: 'http://veedigo.com',
        imgUrl: 'assets/img/veedigo.png',
        tags: ['java', 'javascript', 'ember']
    },

    {
        title: '2 Lies 1 Fact',
        description: 'A general knowledge quiz game on android. The source code is available on github.',
        url: 'https://play.google.com/store/apps/details?id=com.nectarmicrosystems.libgdx.twoliesonefact.android',
        imgUrl: 'assets/img/2l1f.jpeg',
        tags: ['java', 'android', 'libgdx']
    },

    {
        title: 'Beam',
        description: 'Beam is a small text editor I\'m developing as a side project in my free time. I intend to implement features such as text highlighting, FTP connections and a few others, the source is hosted on Github.',
        url: 'https://github.com/tobex9434/Beam',
        imgUrl: 'assets/img/beam.jpg',
        tags: ['java']
    },

    {
        title: 'Expense Journal',
        description: 'Expense journal is a minimal android application for tracking personal finance. It is open sourced on Github.',
        url: 'https://play.google.com/store/apps/details?id=com.nectarmicrosystems.fundsmanager',
        imgUrl: 'assets/img/ej.jpg',
        tags: ['java', 'android', 'libgdx']
    }
];

export default Ember.Route.extend(PageFadein, {
    model(){
        return {
            pageName: pageName,
            projects: projects    
        };
    }
});
