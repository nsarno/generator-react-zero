'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'name',
      message: "What's your component's name?"
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_component.jsx'),
        this.destinationPath('app/scripts/components/' + this.props.name + '.jsx'),
        { name: this.props.name }
      );

      this.fs.copyTpl(
        this.templatePath('_component-test.js'),
        this.destinationPath('test/components/' + this.props.name + '-test.js'),
        { name: this.props.name }
      );
    }
  }
});
