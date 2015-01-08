module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: ['<%= pkg.config.src %>/scss/**/*.scss'],
    tasks: ['build-styles']
  },
  js: {
    files: ['<%= pkg.config.src %>/js/*.js', '<%= pkg.config.src %>/js/lib/*.js'],
    tasks: ['build-scripts', 'copy-scripts']
  },
  assets: {
    files: ['<%= pkg.config.src %>/img/**'],
    tasks: ['copy:images']
  }
  // TODO: implement new svg watch tastk
  // svg: {
  //   files: ['<%= pkg.config.src %>/svg/**'],
  //   tasks: ['grunticon:icons', 'copy:grunticon']
  // }
};
