'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var name = 'MyComponent';

describe('react-zero:component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/component'))
          .withPrompts({ name: name })
          .on('end', done);
  });

  it('creates a component file', function() {
    assert.file('app/scripts/components/' + name + '.jsx');
  });

  it('creates a test file for the component', function() {
    assert.file('test/components/' + name + '-test.js');
  });
});
