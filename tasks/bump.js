/**
 * grunt-bump options
 * @type {Object}
 */

module.exports = {
  options: {
    files: ['package.json'],
    commitFiles: ['Changelog.md', 'package.json'],
    pushTo: 'origin'
  }
};
