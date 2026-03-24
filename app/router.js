import EmberRouter from '@ember/routing/router';
import config from 'cleantech-fresh/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('company');
  this.route('product', function () {
    this.route('aqua-crete');
    this.route('aqua-crete-eifs');
    this.route('sky-floor');
    this.route('sky-flex');
    this.route('polyaspartic-waterproof');
    this.route('polyaspartic-primer');
  });
  this.route('applications');
  this.route('projects');
  this.route('certifications');
  this.route('downloads');
  this.route('contact');
});
