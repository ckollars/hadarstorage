module.exports = {
  options: {
    separator: ';',
    stripBanners: true
  },
  vendor: {
    src: ['<%= pkg.config.src %>/js/libs/**/*', '!<%= pkg.config.src %>/js/libs/modernizr-dev.js'],
    dest: '<%= pkg.config.src %>/js/compiled-vendor.js'
  },
  dev: {
    src: ['<%= pkg.config.src %>/js/*.js', '!<%= pkg.config.src %>/js/compiled-vendor.js'],
    dest: '<%= pkg.config.src %>/js/compiled-dev.js'
  }
};
