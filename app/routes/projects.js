import Ember from 'ember';
import PageFadein  from '../mixins/page-fadein';

let pageName = 'Projects';
let projects = [
    {
        title: 'Vizerr',
        description: 'Vizerr is an android app that uses OCR to extract text from images. It\'s designed for extracting short excerpts from books by snapping them and sharing the excerpts to social media in form of cards.',
        url: 'http://www.vizerr.com',
        imgUrl: 'assets/img/vizerr.png',
        tags: ['java', 'c++', 'android', 'opencv']
    },

    {
        title: 'Beam',
        description: 'Beam is a cross platform desktop podcast client still at the very beginning of development. I\'m building it for my personal use and to learn the wxWidgets GUI library.',
        url: 'https://etherealt.github.io/Beam/',
        imgUrl: 'assets/img/podcast.jpg',
        tags: ['c++', 'wxWidgets', 'CMake']
    },

    {
        title: 'ItunesSearch',
        description: 'A java wrapper for the iTunes search API.',
        url: 'https://etherealt.github.io/ItunesSearch/',
        imgUrl: 'assets/img/itunes.jpg',
        tags: ['java']
    },

    {
        title: 'Veedigo',
        description: 'Veedigo is a platform engineered to help college students in Budapest Hungary, by providing some services that aid student life. This is a collaborative project with Harry Otemelate.',
        url: 'http://veedigo.com',
        imgUrl: 'assets/img/veedigo.png',
        tags: ['java', 'php', 'javascript', 'ember', 'spring']
    },

    {
        title: 'Popular Movies',
        description: 'An android app built during my Android associate developer certification from Udacity',
        url: 'https://github.com/EtherealT/Popular-Movies',
        imgUrl: 'assets/img/movies.jpg',
        tags: ['java', 'android']
    },

    {
        title: 'Stock Hawk',
        description: 'An Android app for monitoring stocks from the Android Developer Nanodegree.',
        url: 'https://github.com/EtherealT/Stock-Hawk',
        imgUrl: 'assets/img/stock.jpg',
        tags: ['java', 'android']
    },

    {
        title: '2 Lies 1 Fact',
        description: 'A general knowledge quiz game on android. The source code is available on github.',
        url: 'https://play.google.com/store/apps/details?id=com.nectarmicrosystems.libgdx.twoliesonefact.android',
        imgUrl: 'assets/img/2l1f.jpeg',
        tags: ['java', 'android', 'libgdx']
    },

    {
        title: 'Expense Journal',
        description: 'Expense journal is a minimal android application for tracking personal finance. It is open sourced on Github.',
        url: 'https://play.google.com/store/apps/details?id=com.nectarmicrosystems.fundsmanager',
        imgUrl: 'assets/img/ej.jpg',
        tags: ['java', 'android']
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
