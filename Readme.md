# woff2base64

Generates CSS font-face with woff2 and woff fonts embedded as base64.

[![Build Status](https://travis-ci.org/Fetten/woff2base64.svg?branch=master)](https://travis-ci.org/Fetten/woff2base64)

## Installation

```
npm install --save woff2base64
```

## Usage

woff2base64 automatically looks up the font-weight and font-style in the given font filename (case-insensitive). 
All [possible css values](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) are supported.

If your font's filename contains the word _regular_, the font-weight will be set to `normal`.

However, if you cannot change the font's filename, you can pass the weight and style for each font via 
the `font` parameter (see below).

```js
import fs from 'fs';
import woff2base64 from 'woff2base64';
const fonts = {
    'Roboto-Bold.woff2': fs.readFileSync('fonts/Roboto/Roboto-Bold.woff2'),
    'Roboto-Bold.woff':  fs.readFileSync('fonts/Roboto/Roboto-Bold.woff'),
	// ...
};
const options = {
    fontFamily: 'Roboto'
};
const css = woff2base64(fonts, options);
// css.woff2 = '@font-face{font-family:"Roboto";src:url(data:application/font-woff2;charset=utf-8;base64,...'
// css.woff  = '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,...'

fs.writeFileSync('build/roboto.woff2.css', css.woff2);
fs.writeFileSync('build/roboto.woff.css', css.woff);
```

## Parameters

woff2base64 accepts two objects: `fonts` and `options`.

### fonts (required)

Use woff2 and woff filenames as keys.

The value can either be a `String` containing the file content, 
a `Buffer` containing the file content or an `Object`, allowing you to pass font-specific options:

```js
const fonts = {
    'Roboto-BoldItalic.woff2': {
        content: fs.readFileSync('fonts/Roboto/Roboto-BoldItalic.woff2'),
        weight: 'bold',
        style: 'italic'
    },
    'Roboto-Bold.woff2': {
        content: fs.readFileSync('fonts/Roboto/Roboto-Bold.woff2'),
        weight: 'bold',
        style: 'normal'
    },
    'Roboto-Regular.woff2': fs.readFileSync('fonts/Roboto/Roboto-Bold.woff2'),
};
```

### Options

#### fontFamily (required)

The name of the Font Family used in css.

Type: `String`


#### fontFaceTemplate

The Template used to generate the css. 
Used with Lodash's [_.template](https://lodash.com/docs/#template).

Type: `String`

Default:
```
@font-face{ font-family:"<%=family%>";src:url(<%=uri%>) format("<%=format%>");font-weight:<%=weight%>;font-style:<%=style%>;}
```

#### fontUriTemplate

The Template used to generate the base64 encoded data uri. 
Used with Lodash's [_.template](https://lodash.com/docs/#template).

Type: `String`

Default:
```
data:<%=mime%>;charset=utf-8;base64,<%=base64%>
```

#### banner

A banner that gets prepended to generated css files.
Set to `''` to disable banner. 

Type: `String`


## Resources

* Convert your ttf fonts to woff2 and woff with [Font Squirrel’s Webfont Generator](http://www.fontsquirrel.com/tools/webfont-generator).

* See the current browser support for woff2 and woff fonts on [canisue.com](http://caniuse.com/#search=woff).

* Why would you need this? Read [Better webfont loading with using localStorage and providing WOFF2 support](http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html) 
by Adam Beres-Deak.

* This package is based on [fontoptim by Artem Sapegin](https://github.com/sapegin/fontoptim) with
improvements for font-style and font-weight recognition.

## License
Released under the [MIT license](License.md).

Copyright (c) 2017 Marcel Fetten. All rights reserved. 
