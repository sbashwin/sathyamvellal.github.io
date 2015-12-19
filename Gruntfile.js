'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            src: 'src',
            dist: 'dist'
        },
        assemble: {
            options: {
                flatten: true,
                assets: '<%= config.src %>/assets',
                layoutdir: '<%= config.src %>/templates/layouts',
                data: '<%= config.src %>/data/*.{json,yml}',
                partials: '<%= config.src %>/templates/partials/**/*.hbs',
                marked: {
                    breaks: false,
                    gfm: true,
                    //                    highlight: function (code, lang, callback) {
                    //                        pygmentize({
                    //                                lang: lang,
                    //                                format: 'html'
                    //                            },
                    //                            code,
                    //                            function (err, result) {
                    //                                callback(err, result.toString());
                    //                            }
                    //                        );
                    //                    },
                    langPrefix: 'language-',
                    pedantic: false,
                    sanitize: false,
                    silent: false,
                    smartLists: false,
                    smartypants: false,
                    tables: true
                }
            },
            pages: {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>/assets'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/templates/pages/',
                    src: '**/*.hbs',
                    dest: '<%= config.dist %>/'
                }]
            }
        },
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/less/',
                    src: ['*.less'],
                    dest: '<%= config.dist  %>/assets/css/',
                    ext: '.css'
                }]
            }
        },
        pure_grids: {
            responsive: {
                dest: 'dist/assets/css/grid.css',
                options: {
                    units: 24, // 12-column grid
                    mediaQueries: {
                        sm: 'screen and (min-width: 35.5em)', // 568px
                        md: 'screen and (min-width: 48em)',   // 768px
                        lg: 'screen and (min-width: 64em)',   // 1024px
                        xl: 'screen and (min-width: 80em)'    // 1280px
                    }
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.dist %>/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/assets/',
                    src: '**',
                    dest: '<%= config.dist %>/assets/'
                }]
            }
        },
        clean: ['<%= config.dist %>/**/*'],
        watch: {
            pages: {
                files: '<%= config.src %>/{templates,data}/**',
                tasks: ['newer:assemble']
            },
            assets: {
                files: '<%= config.src %>/assets/**',
                tasks: ['newer:copy']
            },
            styles: {
                files: '<%= config.src %>/less/**',
                tasks: ['less', 'cssmin']
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: '<%= config.src %>/components'
                }
            }
        },
        'http-server': {
            'dev': {
                root: './<%= config.dist %>',
                port: '8000',
                host: '0.0.0.0',
                ext: 'html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-pure-grids');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('assemble');

    grunt.registerTask('init', ['bower:install']);
    grunt.registerTask('generate', ['assemble', 'less', 'pure_grids', 'cssmin', 'copy']);
    grunt.registerTask('build', ['clean', 'generate']);
    grunt.registerTask('serve', ['http-server']);
    grunt.registerTask('default', ['clean', 'build', 'watch']);
};
