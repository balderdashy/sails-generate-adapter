/**
 * sails-generate-adapter
 *
 * Usage:
 * `sails generate adapter`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-adapter) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

