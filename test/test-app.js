'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var _ = require('lodash');

var project = 'DragonSlayer';

var matchArrayRegExp = function (arr) {
  var regexStr = _(dependencies).map(function(str) {
    return '(?=.*' + str + ')';
  }).join('') + '.+';
  return new RegExp(regexStr);
};

describe('react-zero:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ project: project })
      .on('end', done);
  });

  it('creates package.json', function () {
    assert.file(['package.json']);
  });

  it('package.json project name is valid', function () {
    assert.fileContent('package.json', new RegExp(project));
  });

  it('creates .gitignore', function () {
    assert.file(['.gitignore']);
  });

  it('creates .editorconfig', function () {
    assert.file(['.editorconfig']);
  });

  it('creates react / flux skeleton', function () {
    assert.file([
      'app/assets/index.html',
      'app/scripts/actions/.keep',
      'app/scripts/components/App.jsx',
      'app/scripts/constants/.keep',
      'app/scripts/dispatcher/dispatcher.js',
      'app/scripts/services/.keep',
      'app/scripts/stores/.keep',
      'app/scripts/initialize.jsx',
      'app/scripts/routes.jsx'
    ]);
  });

  it('creates sass project structure', function () {
    assert.file([
      'app/styles/modules/.keep',
      'app/styles/partials/.keep',
      'app/styles/app.scss'
    ]);
  });
});
