## `join` function for Buffer

```
const bufferJoin = require('buffer-join')

bufferJoin([Buffer.from('a'), Buffer.from('b')], Buffer.from(',')).toString() // => a,b
```
