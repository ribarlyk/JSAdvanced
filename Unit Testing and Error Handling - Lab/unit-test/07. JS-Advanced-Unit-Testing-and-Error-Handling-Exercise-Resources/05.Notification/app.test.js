const expect = require('chai/lib/chai/interface/expect');
const notify = require('.*/app');



describe('testing log',()=>{
    it ('test log',()=>{
        expect(notify('Hello')).to.be.true
    })
})