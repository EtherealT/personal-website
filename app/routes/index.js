import Ember from 'ember';
import PageFadein  from '../mixins/page-fadein';

let imgDir = '/assets/img/';
let preloadedImages = [];
let imgFiles = [
    '2l1f.jpeg',
    'beam.jpg',
    'codepen.png',
    'ej.jpg',
    'favicon-32x32.png',
    'github.png',
    'li.png',
    'me.jpeg',
    'movies.jpg',
    'stack-o.png',
    'stock.jpg',
    'twitter.png',
    'veedigo.png',
    'vizerr.png'
];

export default Ember.Route.extend(PageFadein, {

    activate: function(){
        this.preloadAllImages();
        $(document).ajaxStart(function() { Pace.restart(); });
    },

    preloadAllImages: function(){
        var iter = 0;
        var imageCount = imgFiles.length;

        for(iter; iter < imageCount; iter++){
            var imageSource = imgDir + imgFiles[iter];
            preloadedImages.push((new Image()).src = imageSource);
        }
    }

});
