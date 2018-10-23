## `join` function for Buffer
[![Build Status](https://travis-ci.org/isayme/node-buffer-join.svg?branch=master)](https://travis-ci.org/isayme/node-buffer-join)
[![Coverage Status](https://coveralls.io/repos/github/isayme/node-buffer-join/badge.svg?branch=master)](https://coveralls.io/github/isayme/node-buffer-join?branch=master)

```
const bufferJoin = require('buffer-join')

bufferJoin([Buffer.from('a'), Buffer.from('b')], Buffer.from(',')).toString() // => a,b
```
