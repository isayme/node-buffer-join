const bufferJoin = require('../lib/join')
const assert = require('power-assert')

describe('Buffer join', () => {
  describe('separator', () => {
    it('none', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let result = bufferJoin([buf1, buf2])

      assert.equal(result.length, 2)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], buf2[0])
    })

    it('buffer', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let separator = Buffer.from([ 0x03 ])
      let result = bufferJoin([buf1, buf2], separator)

      assert.equal(result.length, 3)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], separator[0])
      assert.equal(result[2], buf2[0])
    })

    it('string', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let separator = 'a'
      let result = bufferJoin([buf1, buf2], separator)

      assert.equal(result.length, 3)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], 0x61) // 0x61 === 'a'
      assert.equal(result[2], buf2[0])
    })
  })

  describe('join', () => {
    it('arr.length === 0', () => {
      let result = bufferJoin([])
      assert.equal(result.length, 0)
    })

    it('arr.length === 1', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let result = bufferJoin([ buf1 ])
      assert.equal(result.length, 1)
      assert.equal(result[0], buf1[0])
    })

    it('arr.length === 2', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let result = bufferJoin([ buf1, buf2 ])
      assert.equal(result.length, 2)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], buf2[0])
    })

    it('arr.length === 3', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let buf3 = Buffer.from([ 0x03 ])
      let result = bufferJoin([ buf1, buf2, buf3 ])
      assert.equal(result.length, 3)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], buf2[0])
      assert.equal(result[2], buf3[0])
    })

    it('arr.length === 4', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let buf3 = Buffer.from([ 0x03 ])
      let buf4 = Buffer.from([ 0x04 ])
      let result = bufferJoin([ buf1, buf2, buf3, buf4 ])
      assert.equal(result.length, 4)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], buf2[0])
      assert.equal(result[2], buf3[0])
      assert.equal(result[3], buf4[0])
    })

    it('arr.length === 5', () => {
      let buf1 = Buffer.from([ 0x01 ])
      let buf2 = Buffer.from([ 0x02 ])
      let buf3 = Buffer.from([ 0x03 ])
      let buf4 = Buffer.from([ 0x04 ])
      let buf5 = Buffer.from([ 0x05 ])
      let result = bufferJoin([ buf1, buf2, buf3, buf4, buf5 ])
      assert.equal(result.length, 5)
      assert.equal(result[0], buf1[0])
      assert.equal(result[1], buf2[0])
      assert.equal(result[2], buf3[0])
      assert.equal(result[3], buf4[0])
      assert.equal(result[4], buf5[0])
    })
  })
})
