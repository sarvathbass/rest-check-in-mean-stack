
module.exports = function(grunt) {

    var jsHighcharts = [
        'node_modules/highcharts/modules/highmaps.js',
        'assets/js/libs/highcharts/highcharts.js',
        'assets/js/libs/highcharts/modules/exporting.js',
        'assets/js/libs/highcharts/highcharts-3d.js',
        'assets/js/libs/highcharts/highcharts-more.js',
        'node_modules/highcharts/highstock.js'
    ];
    var jsPrism = [
        'node_modules/prismjs/prism.js'
    ];
    var jsFullCalendar = [
        'node_modules/moment/moment.js',
        'node_modules/fullcalendar/node_modules/moment/moment.js',
        'node_modules/fullcalendar/dist/fullcalendar.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'

            },
            all: 'Gruntfile.js'
        },
        concat: {
            dist: {

            }
        },
        uglify: {
            dist: {
                files: {
                    'js/mara.min.js': 'assets/js/scripts/**/*.js',
                    'assets/js/highcharts.min.js': [jsHighcharts],
                    'assets/js/prism.min.js': [jsPrism],
                    'assets/js/fullcalendar.min.js': [jsFullCalendar]
                }
            }
        },
        sass:{
            dist: {
                files: {
                    'css/mara.min.css': 'assets/sass/main.scss'
                },
                options: {
                    outputStyle: 'compressed',
                    lineNumbers: 'true'
                }
            }
        },
        watch: {
            sass: {
                files: 'assets/sass/**/*.scss',
                tasks: 'sass',
                options: {
                    livereload: true,
                    files: ['dist/**/*']
                }
            },
            javascript: {
                files: [
                    'assets/js/scripts/**/*.js',
                    jsHighcharts,
                    jsPrism,
                    jsFullCalendar
                ],
                tasks: 'uglify'

            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 6060
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('w', ['sass', 'uglify', 'connect', 'concat','jshint', 'watch']);
    grunt.registerTask('deploy', ['sass', 'uglify','concat','jshint']);

};