
const samay = require('../dist/samay').samay

console.log(samay("20190228", "YYYYMMDD").format("DD MM YYYY HH mm"))
console.log(samay('20180228', 'YYYYMMDD').format("DD MM YYYY HH mm"))
console.log(samay('20200229', 'YYYYMMDD').format("DD MM YYYY HH mm"))

console.log(samay('201702011345', 'YYYYMMDDHHmm').format('DD MMM YYYY h:mm A ddd'))
