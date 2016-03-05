module.exports = function(grunt) {
	grunt.initConfig({
		browserify:{
			dist:{
				files: {
					'bundle.js':['src/index.js']
				}
			}
		},
		uglify: {
	        dist: {
	        	options: {
					mangle: false
				},
	            files: {
	                'bundle.min.js': [
	                    'bundle.js'
	                ]
	            }
        	}
    	}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['browserify', 'uglify']);
};