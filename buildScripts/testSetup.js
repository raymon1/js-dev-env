// this file isn't transpilled, so must use commonJS and ES5

// require babel to traspile our tests run
require('babel-register')();

// Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};