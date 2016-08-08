# string-remove [![Build Status](https://travis-ci.org/cht8687/string-remove.svg?branch=master)](https://travis-ci.org/cht8687/string-remove)

> Remove unwanted things in your string

## Install

```
$ npm install --save string-remove
```

## Usage

```js

const stringRemove = require('string-remove');

const yourString1 = 'examle???string.@@!!';

const result = stringRemove(yourString1, ['?','@','.','!']);

console.log(result);
//=> 'examlestring.!!'

const yourString2 = '% % %t e s t$ $ $ ';

const result = stringRemove(yourString2, ['%t',' ', '%', '$', 't']);

console.log(result);
//=> 'es'

## License

MIT © [haotian Chang](https://github.com/cht8687)
