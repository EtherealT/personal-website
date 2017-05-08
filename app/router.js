import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('projects');
  this.route('contact');
  this.route('portfolio');
  this.route('admin');
  this.route('books');
});

export default Router;
