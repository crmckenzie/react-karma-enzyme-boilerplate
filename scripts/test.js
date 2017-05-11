'use strict';

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'development';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});
const path = require('path');
const Server = require('karma').Server;
var config = path.resolve('config/karma.conf.js');

var singleRun = false;
var autoWatch = true;

console.log(process.argv);

if (process.argv.indexOf("--singleRun") > -1) {
  console.log("turning on singlerun, and turning autowatch off: " + process.argv)
  singleRun = true;
  autoWatch = false;
}

var settings = {configFile: config, singleRun: singleRun, autoWatch: autoWatch};

var server = new Server(settings, function(exitCode) {
  console.log('Karma has exited with ' + exitCode)
  process.exit(exitCode)
});

server.start();
