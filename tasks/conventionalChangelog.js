/**
 * grunt-conventionalchangelog options
 * @type {Object}
 */

module.exports = {
  options: {
    changelogOpts: {
      // conventional-changelog options go here
      preset: 'angular'
    }
  },
  release: {
    src: 'Changelog.md'
  }
};
