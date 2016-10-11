var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'supersecretkey'
var sentryApp = 'supersecretappid'
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tag: {
    branch: _APP_INFO.branch,
  }
}).install()

console.log(window.thing.doesNotExist);

ReactDom.render(
  routes,
  document.getElementById('app')
);