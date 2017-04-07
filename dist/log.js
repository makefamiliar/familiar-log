'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.logJson = logJson;

// const env = process.env.NODE_ENV;

function log() {
  var _this = this;

  // if (env !== 'development') {
  //   return null;
  // }

  var api = function api() {
    return {
      json: logJson.bind(_this)
    };
  };

  if (arguments.length === 0) {
    return new api(true);
  }

  var line = '================';

  console.log(line);

  console.log('-- Familiar Log');

  for (var i = 0; i < arguments.length; i++) {
    console.log(line);
    console.log(arguments[i]);
  }

  console.log('');

  return new api();
}

function logJson() {
  // if (env !== 'development') {
  //   return null;
  // }

  if (arguments.length === 0) {
    return;
  }

  for (var i = 0; i < arguments.length; i++) {
    var data = JSON.stringify(arguments[i], null, 2);

    console.log(data);
    console.log('');
  }
}