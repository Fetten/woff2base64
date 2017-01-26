'use strict';
import Woff2Base64 from './woff2base64';

module.exports = function (fonts, opts) {
  return (new Woff2Base64(fonts, opts)).generate();
};
