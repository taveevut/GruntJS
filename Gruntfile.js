module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			options: {
				livereload: true	
			},
			main: {
				files: ['*.html']
			},
			js: {
				files: ['app/js/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['app/css/*.css'],
				tasks: ['cssmin']
			}
		},
		uglify: {
			options: {},
			main: {
				expand: true,
				cwd: 'app/js/',
				src: ['*.js'],
				dest: 'js/',
				ext: '.min.js'
			}
		},
		cssmin: {
			options: {
				banner: '/* CREATED ON <%= grunt.template.today("dd-mm-yyyy") %> */n' + '/* BANNER GOES HERE */n'
			},
			main: {
				expand: true,
				cwd: 'app/css/',
				src: '*.css',
				dest: 'css/',
				ext: '.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['watch']);
};