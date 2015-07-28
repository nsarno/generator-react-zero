'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('ReactZero') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project',
      message: "What's your project's name?",
      default: _.capitalize(_.camelCase(this.appname))
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
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          project: this.props.project
        }
      );
      this.directory(
        this.templatePath('app'),
        this.destinationPath('app')
      );
      this.directory(
        this.templatePath('public'),
        this.destinationPath('public')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
