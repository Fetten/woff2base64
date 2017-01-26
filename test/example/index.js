module.exports = function () {
  'use strict';

  var fs = require('fs');
  var woff2base64 = require('../../lib/index');

  var fonts = {
    'Roboto-Black-900.woff': {
      content: fs.readFileSync('./test/fonts/Roboto/Roboto-Black-900.woff'),
      weight: '900',
      style: 'normal'
    },
    'Roboto-BlackItalic-900.woff': {
      content: fs.readFileSync('./test/fonts/Roboto/Roboto-BlackItalic-900.woff'),
      weight: '900',
      style: 'italic'
    },
    'Roboto-Bold.woff':             fs.readFileSync('./test/fonts/Roboto/Roboto-Bold.woff'),
    'Roboto-BoldItalic.woff':       fs.readFileSync('./test/fonts/Roboto/Roboto-BoldItalic.woff'),
    'Roboto-Italic.woff':           fs.readFileSync('./test/fonts/Roboto/Roboto-Italic.woff'),
    'Roboto-Light-300.woff':        fs.readFileSync('./test/fonts/Roboto/Roboto-Light-300.woff'),
    'Roboto-LightItalic-300.woff':  fs.readFileSync('./test/fonts/Roboto/Roboto-LightItalic-300.woff'),
    'Roboto-Medium-500.woff':       fs.readFileSync('./test/fonts/Roboto/Roboto-Medium-500.woff'),
    'Roboto-MediumItalic-500.woff': fs.readFileSync('./test/fonts/Roboto/Roboto-MediumItalic-500.woff'),
    'Roboto-Regular.woff':          fs.readFileSync('./test/fonts/Roboto/Roboto-Regular.woff'),
    'Roboto-Thin-100.woff':         fs.readFileSync('./test/fonts/Roboto/Roboto-Thin-100.woff'),
    'Roboto-ThinItalic-100.woff':   fs.readFileSync('./test/fonts/Roboto/Roboto-ThinItalic-100.woff'),

    'Roboto-Black-900.woff2': {
      content: fs.readFileSync('./test/fonts/Roboto/Roboto-Black-900.woff2'),
      weight: '900',
      style: 'normal'
    },
    'Roboto-BlackItalic-900.woff2': {
      content: fs.readFileSync('./test/fonts/Roboto/Roboto-BlackItalic-900.woff2'),
      weight: '900',
      style: 'italic'
    },
    'Roboto-Bold.woff2':              fs.readFileSync('./test/fonts/Roboto/Roboto-Bold.woff2'),
    'Roboto-BoldItalic.woff2':        fs.readFileSync('./test/fonts/Roboto/Roboto-BoldItalic.woff2'),
    'Roboto-Italic.woff2':            fs.readFileSync('./test/fonts/Roboto/Roboto-Italic.woff2'),
    'Roboto-Light-300.woff2':         fs.readFileSync('./test/fonts/Roboto/Roboto-Light-300.woff2'),
    'Roboto-LightItalic-300.woff2':   fs.readFileSync('./test/fonts/Roboto/Roboto-LightItalic-300.woff2'),
    'Roboto-Medium-500.woff2':        fs.readFileSync('./test/fonts/Roboto/Roboto-Medium-500.woff2'),
    'Roboto-MediumItalic-500.woff2':  fs.readFileSync('./test/fonts/Roboto/Roboto-MediumItalic-500.woff2'),
    'Roboto-Regular.woff2':           fs.readFileSync('./test/fonts/Roboto/Roboto-Regular.woff2'),
    'Roboto-Thin-100.woff2':          fs.readFileSync('./test/fonts/Roboto/Roboto-Thin-100.woff2'),
    'Roboto-ThinItalic-100.woff2':    fs.readFileSync('./test/fonts/Roboto/Roboto-ThinItalic-100.woff2'),
  };

  var css = woff2base64(fonts, {fontFamily: 'Roboto'});

  fs.writeFileSync('./test/tmp/roboto.woff.css', css.woff);
  fs.writeFileSync('./test/tmp/roboto.woff2.css', css.woff2);
};
