var NODE_PATH = process.env.NODE_PATH;
process.env.NODE_PATH = (NODE_PATH || '') + ':' + process.cwd();
require('module').Module._initPaths();
process.env.NODE_PATH = NODE_PATH;
global.require = require;