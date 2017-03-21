var samay = require('./samay');

module.exports = samay;

console.log(samay.samay('20170129', 'YYYYMMDD').format('YYYY MMMM DD hh HH MM A mm ss Do MMM'));
console.log(samay.samay('20170227', 'YYYYMMDD').format('YYYY MMMM Do, ddd , DD A HH hh mm MMM'));
console.log(samay.samay('20170329', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170429', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170529', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170629', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170729', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170829', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20170929', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20171029', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20171129', 'YYYYMMDD').format('YYYY MMMM DD'));
console.log(samay.samay('20171229', 'YYYYMMDD').format('YYYY MMMM DD'));
