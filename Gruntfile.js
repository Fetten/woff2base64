/**
 * Gruntfile
 * Used for release process.
 */
'use strict';

(function () {
  var path = require('path');

  module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'tasks'),
      init: true,
      jitGrunt: {
        staticMappings: {
          'bump-only': 'grunt-bump',
          changelog: 'grunt-conventional-changelog'
        }
      }
    });
  };
})();
