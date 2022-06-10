const { expect } = require('chai');
const {isOddOrEven} = require('./2.Even or Odd');


describe('Unit Testint Odd or Even', ()=>{
    it ('test array ',()=>{
        expect(isOddOrEven([1,2,3,4])).to.be.undefined
    })
    it ('test number',()=>{
        expect(isOddOrEven(1,2,3,4)).to.be.undefined
    })
    it ('test  odd string',()=>{
        expect(isOddOrEven('hello')).to.equal('odd')
    })
    it ('test even string',()=>{
        expect(isOddOrEven('hell')).to.equal('even')
    })

    it ('test  strings',()=>{
        expect(isOddOrEven('hell')).to.equal('even') 
        expect(isOddOrEven('hells')).to.equal('odd') 
        expect(isOddOrEven('asdadsdasdas')).to.equal('even')
    })

})