import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-animate';
import './components';
import 'angular-ui-router';
import 'ui-router-route-to-components';
import 'angular-ui-bootstrap';
import './templates';
import './filters';
import './directives';
import './services';



// create and bootstrap application
const requires = [
  'ui.router.components',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  require('angular-touch'),
  'templates',
  'app.filters',
  'app.components',
  'app.directives',
  'app.services',
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
