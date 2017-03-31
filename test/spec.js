describe('samay.js test suite', function(){

	const samay = require('../samay').samay;

	it('constructor with no arguments', function() {
		expect(+samay().originalDate === +(new Date)).toBe(true)
	});

	it('constructor with current date object timing', function() {
		expect(+samay(new Date).originalDate === +(new Date)).toBe(true)
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20180330', 'YYYYMMDD').format('MM/DD/YYYY HH:mm')).toBe('03/30/2018 00:00')
	});

});