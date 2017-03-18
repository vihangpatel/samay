function parseDate(strDate) {

	const REGEXP_TO_EXTRACT_DATE = /(\d{4})(\d{2})(\d{2})/g,
		splitDate = REGEXP_TO_EXTRACT_DATE.exec(strDate)

		if(splitDate) {
			const date = [splitDate[1],splitDate[2],splitDate[3]].join('-'),
				structuredDate = `${date}T00:00:00+05:30` // iOS needs format 2020-12-30T23:30:10+05:30 , default parses into GMT time, so need +05:30 for IST conversion
				return structuredDate
		} else {
			return strDate
		}
}

// Function for format 20170317
function parseDateTime(strDate) {

	const REGEXP_TO_EXTRACT_DATE = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/g,
		splitDate = REGEXP_TO_EXTRACT_DATE.exec(strDate)

		if(splitDate) {
			const date = [splitDate[1],splitDate[2],splitDate[3]].join('-'),
				time = [splitDate[4],splitDate[5]].join(':'),
				structuredDate = `${date}T${time}+05:30` // iOS needs format 2020-12-30T23:30:10+05:30 , default parses into GMT time, so need +05:30 for IST conversion
				return structuredDate
		} else {
			return strDate
		}
}

// Function for format 17-03-2017 22:10:30
function parseDateTime2(strDate) {
	const REGEXP_TO_EXTRACT_DATE = /(\d{2})-(\d{2})-(\d{4})\s(\d{2}):(\d{2}):(\d{2})/g,
		splitDate = REGEXP_TO_EXTRACT_DATE.exec(strDate)

		if(splitDate) {
			const date = [splitDate[1],splitDate[2],splitDate[3]].join('-'),
				time = [splitDate[4],splitDate[5], splitDate[6]].join(':'),
				structuredDate = `${date}T${time}+05:30` // iOS needs format 2020-12-30T23:30:10+05:30 , default parses into GMT time, so need +05:30 for IST conversion
				return structuredDate
		} else {
			return strDate
		}
}

/**
* isPastDate compares given dates
* @param date1 date to be compared
* @param date2 reference date from which whether date1 is of past is determined
* @return Boolean true/false based on the date calculation
*/
function isPastDate(date1,date2) {
	const structuredDate1 = parseDate(date1),
		structuredDate2 = date2 ? parseDate(date2) : new Date(currentDateTime)
	return (new Date(structuredDate2).getTime()) > (new Date(structuredDate1).getTime())
}


function addDays(sourceDate, days) {
	const miliseconds = 24 * 60 * 60 * 1000 * (days || 0),
		epochTime = new Date(sourceDate)
	return new Date(+epochTime + miliseconds)
}


function getDayName(dateObj, options = {}) {
	const inputDate = new Date(dateObj),
		dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday'][inputDate.getDay()] || ''
	return options.short ? dayName.substr(0,3) : dayName
}

function _subtract(value, type) {
	const map = {
		'days' : _subtractDays.bind(this),
		'hours' : _subtractHours.bind(this)
	}

	return map[type](value);
}

function _subtractDays(value, type) {
	const miliseconds = 24 * 60 * 60 * 1000 * (days || 0),
		epochTime = +this.inputDate
	return new Date(+epochTime - miliseconds)
}

function _subtractHours(hours) {
	const miliseconds = 60 * 60 * 1000 * (hours || 0),
		epochTime = +this.inputDate
	return new Date(+epochTime - miliseconds)
}

function _add(value, type) {
	const map = {
		'days' : _addDays.bind(this),
		'hours' : _addHours.bind(this)
	}

	return map[type](value);
}

function _addHours(hours) {
	const miliseconds = 60 * 60 * 1000 * (hours || 0),
		epochTime = +this.inputDate
	return new Date(+epochTime + miliseconds)
}

function _addDays(days) {
	const miliseconds = 24 * 60 * 60 * 1000 * (days || 0),
		epochTime = +this.inputDate
	return new Date(+epochTime + miliseconds)
}

function _getDayName(day, options = {}) {
	const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday'][day] || ''
	return options.length ? dayName.substr(0, options.length) : dayName
}

function _getMonthName(month, options = {}) {
	const monthName = ['January', 'February', 'March', 'April', 'May', 'June' ,
					'July', 'August', 'September' , 'October' , 'November', 'December'][month] || ''
	return options.length ? monthName.substr(0, options.length) : monthName
}

function _formatMonth(month) {
	const updatedMonth = month + 1
	return _prepandZero(updatedMonth)
}

function _formatDate(date) {
	return _prepandZero(date)
}

function _prepandZero(value) {
	return value < 9 ? `0${value}` : value
}

function _format(format) {
	const inputDate = this.inputDate,
		date = inputDate.getDate(),
		month = inputDate.getMonth(),
		day = inputDate.getDay(), // Sunday is 0, Monday is 1 and so on .....
		fullYear = inputDate.getFullYear(),
		year = fullYear % 100,
		hour24 = inputDate.getHours(),
		hour12 = hour24 > 12 ? (24 - hour24) : hour24,
		minutes = inputDate.getMinutes(),
		seconds = inputDate.getSeconds(),
		isPM = hour24 >=12

	return (format || '')
				.replace('ddd', _getDayName(day, { length : 3 }))
				.replace('DD', _formatDate(date))
				.replace('MMM', _getMonthName(month, { length : 3 }))
				.replace('MM', _formatMonth(month))
				.replace('yyyy', fullYear)
				.replace('YYYY', fullYear)
				.replace('yy', _prepandZero(year))
				.replace('YY', _prepandZero(year))
				.replace('mm', _prepandZero(minutes)) // Lower case depicts minutes
				.replace('ss', _prepandZero(seconds))
				.replace('hh', _prepandZero(hour12))  // 'hh' depicts 12 hour format
				.replace('HH', _prepandZero(hour24))  // 'HH' stands for the 24 hours format
				.replace('A', isPM ? 'PM' : 'AM')

}

function samay(inputDate, scanFormat) {

	let parsedDate = undefined

	const formats = samay.FORMATS,
		fnCallMap = {
			[formats.DD_MM_YYYY_HH_mm_ss] : parseDateTime2,
			[formats.YYYYMMDDHHmm] : parseDateTime,
			[formats.YYYYMMDD] : parseDate
		}

	if(!fnCallMap[scanFormat]) {
		throw new SamayError('INVALID INPUT FORMAT - Exception Occurred in constructor')
	}

	this.inputDate = new Date(fnCallMap[scanFormat](inputDate))

	if(this.inputDate === samay.INVALID) {
		throw new SamayError('INVALID DATE - Exception Occurred in constructor')
	}

	return {
		format : _format.bind(this),
		add : _add.bind(this)
	}
}

samay.INVALID = 'Invalid Date'
samay.FORMATS = {
	'DD_MM_YYYY_HH_mm_ss' : 'DD_MM_YYYY_HH_mm_ss',
	'YYYYMMDDHHmm' : 'YYYYMMDDHHmm',
	'YYYYMMDD' : 'YYYYMMDD'
}

function SamayError(message) {
	this.message = message
	this.name = 'Samay Exception'
}

module.exports = {
	samay : samay.bind({})
}