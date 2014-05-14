module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['src/start.js', 'src/ns.js', 'src/Id.js', 'src/Svg.js', 'src/Transform.js', 'src/Cache.js', 'src/Url.js', 'src/Dispatch.js', 'src/Queue.js', 'src/Map.js', 'src/Layer.js', 'src/Image.js', 'src/GeoJson.js', 'src/Dblclick.js', 'src/Drag.js', 'src/Wheel.js', 'src/Arrow.js', 'src/Hash.js', 'src/Touch.js', 'src/Interact.js', 'src/Compass.js', 'src/Grid.js', 'src/Stylist.js', 'src/end.js'],
                dest: '<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'uglify']);

};