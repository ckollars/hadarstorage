module.exports = function (grunt) {
  'use strict';

  // Build icon styles from svg using Grunticon
  grunt.registerTask(
    'icons',
    'Serves svg styles and backup pngs.',
    ['grunticon']
  );

  // CSS Build
  grunt.registerTask(
    'build-styles',
    'CSS build.',
    ['scsslint', 'sass:build', 'autoprefixer:multiple_files' ]
  );

  // Build js scripts for development
  grunt.registerTask(
    'build-scripts',
    'Build custom javascripts.',
    ['concat:vendor', 'concat:dev']
  );

   // Copy js scripts for development
  grunt.registerTask(
    'copy-scripts',
    ['copy:js']
  );

  // Development
  grunt.registerTask(
    'server',
    'Build a development (_dev) site with watch the comand running.',
    ['build-styles', 'build-scripts', 'copy-scripts', 'copy:images', 'watch' ]
  );

};
