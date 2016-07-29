module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      main: {
        options: {
          preserveComments: 'some'
        },
        files: {
          'dist/ng-stomp.min.js': ['src/ng-stomp.js'],
          'dist/ng-stomp.standalone.min.js': [
            'bower_components/sockjs/sockjs.min.js',
            'node_modules/webstomp-client/dist/webstomp.min.js',
            'src/ng-stomp.js'
          ]
        }
      }
    },
    standard: {
      options: {
        format: true
      },
      app: {
        src: ['ng-stomp.js']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-standard')
  grunt.registerTask('default', ['standard', 'uglify'])
}
