var samay = require('./samay').samay;

module.exports = samay;



var ob1 = samay('20170105', 'YYYYMMDD' );
var ob2 = samay('20170606', 'YYYYMMDD');
var ob3 = samay('20140106', 'YYYYMMDD');

console.log(ob3.isAfter(new Date));