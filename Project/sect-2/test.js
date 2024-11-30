const assert = require('assert');

describe('file to be tested', () => {
	before(() => {
		console.log('==before');
	});
	after(() => {
		console.log('==after');
	});
	beforeEach(() => {
		console.log('==beforeEach');
	});
	afterEach(() => {
		console.log('==afterEach');
	});
	context('function to be tested', () => {
		it('should do something', () => {
			assert.equal(1, 1);
		});
		it('should do something else', () => {
			assert.deepEqual({ name: 'joe' }, { name: 'joe' });
			// assert.deepEqual({name: 'joe'}, {name: 'steve'})
		});
		it('this is a pending test');
	});
	context('another function', () => {
		it('should do something');
	});
});
