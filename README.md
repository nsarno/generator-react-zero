# generator-react-zero
[![npm version](https://badge.fury.io/js/generator-react-zero.svg)](http://badge.fury.io/js/generator-react-zero)
[![Build Status](https://travis-ci.org/nsarno/generator-react-zero.svg)](https://travis-ci.org/nsarno/generator-react-zero)

A [Yeoman](http://yeoman.io) generator to bootstrap a React/Flux application.

## Features

- JS Build 
  - JS bundling (with [Browserify](http://browserify.org/)) 
  - External sourcemaps
  - ES6 transpiling
  - JSX transpiling
  - Watch & sync browser
- CSS build
  - SASS transpiling
  - Watch & sync browser
- Assets
  - copy all files & folder from assets folder "as is"
  - Watch & sync browser
- Serve in browser

## Getting Started

Install yeoman and the react-zero generator:

```bash
$ npm install -g yo
$ npm install -g generator-react-zero
```

Run the app generator:

```bash
$ mkdir myapp && cd myapp
$ yo react-zero
```

Run the component sub-generator (inside the project's directory):

```bash
$ yo react-zero:component
```

## Usage

The entire build process is based on NPM ([no, you don't need Gulp](http://gon.to/2015/02/26/gulp-is-awesome-but-do-we-really-need-it/)).

### Build, watch & serve

```bash
$ npm start
```

### Build project

```bash
$ npm run build
```

Build project in `public/`.

You can also build the different part separately:

```bash
$ npm run build:js
$ npm run build:css
$ npm run build:assets
```

### Watch project

Same as build, but replace `build` with `watch`

### Serve project

```bash
$ npm run serve
```

Browser sync the `public/` folder.

### Clean

```bash
$ npm run clean
```

Remove content of `public/` folder.

## Future improvements

- Add `npm test` command.
- Assets optimization (minify, uglify, etc).

## License

MIT

## Contributing

1. Fork it ( https://github.com/nsarno/generator-react-zero/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
