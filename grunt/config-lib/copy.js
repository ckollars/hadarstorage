module.exports = {
  images: {
    files: [
      { expand: true, flatten: true, cwd: '/images', src: '**', dest: '/images' }
    ]
  },
  js: {
    files: [
      { expand: true, flatten: true, cwd: '/js', src: 'modernizr.js', dest: '/js' }
    ]
  },
  jsdev: {
    files: [
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js/libs', src: 'modernizr.js', dest: '<%= pkg.config.dev %>/js' },
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js', src: 'compiled-dev.js', dest: '<%= pkg.config.dev %>/js' },
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js', src: 'compiled-vendor.js', dest: '<%= pkg.config.dev %>/js' }
    ]
  }
};
