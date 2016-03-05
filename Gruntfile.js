module.exports = function(grunt) {
	grunt.initConfig({
		browserify:{
			dist:{
				files: {
					'src/bundle.js':['src/index.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify']);
};