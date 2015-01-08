module.exports = {
  options: {
    browsers: ['last 2 versions'],
    map: true
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: '<%= pkg.config.dev %>/css/*.css',
    dest: '<%= pkg.config.dev %>/css/'
  }
};
