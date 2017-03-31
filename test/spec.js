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

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20180330', 'YYYYMMDD').format('MM/DD/YYYY HH:mm')).toBe('03/30/2018 00:00')
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20180330', 'YYYYMMDD').subtract(2,'hour').format('MM/DD/YYYY HH:mm')).toBe('03/29/2018 22:00')
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20180101', 'YYYYMMDD').subtract(2,'hour').format('MM/DD/YYYY HH:mm')).toBe('12/31/2017 22:00')
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20170301', 'YYYYMMDD').subtract(2,'hour').format('MM/DD/YYYY HH:mm')).toBe('02/28/2017 22:00')
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('20170301', 'YYYYMMDD').subtract(2,'days').format('MM/DD/YYYY HH:mm')).toBe('02/27/2017 00:00')
	});

	it('format test YYYYMMDD against format MM/DD/YYYY HH:mm', function() {
		expect(samay('201712311545', 'YYYYMMDDHHmm').add(2,'days').subtract(2,'hour').format('MM/DD/YYYY HH:mm')).toBe('01/02/2018 13:45')
	});
});