describe('samay.js test suite', function(){

	const samay = require('../samay').samay;

	it('constructor with no arguments', function() {
		expect(+samay().originalDate === +(new Date)).toBe(true)
	});


});