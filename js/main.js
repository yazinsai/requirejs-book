// Set configuration options
requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
      'lib/jquery-1.11.3.min' ],
  },
});

// Bootstrap your application
require(['jquery','app'], function($, app) {
  $('body').append("- Done loading the app");
});
