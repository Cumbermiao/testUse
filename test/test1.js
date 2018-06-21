
const assert = require('assert');
const {sum,read} = require('../src/index');


describe('sum',()=>{
    it('sum(1,2) should return 3',()=>{
        assert.equal(sum(1,2),3)
    })
})

describe('read', ()=>{
    it('read should return 15',async ()=>{
        let res = await read()
        assert.equal(res,15)
    })
})