/*
 * Please refer to the dev.sample.json file.
 * Copy this file and create a new file named "dev.private.json"
*/

var nconf = require('nconf');
var path = require('path');

const env = process.env.NODE_ENV || 'dev';

let privateFileName = env + '/private.json';
let publicFileName = env + '/public.json';

var envPrivateFile = path.join(__dirname, privateFileName);
var envPublicFile = path.join(__dirname, publicFileName);

var privateFile = path.join(__dirname, "private.json");
var publicFile = path.join(__dirname, "public.json");

// nconf: take confo first from environment then from private files and then from public files
var config = nconf.env()
  .file('env_private', envPrivateFile)
  .file('private', privateFile)
  .file('env_public', envPublicFile)
  .file('public', publicFile);

module.exports = config;