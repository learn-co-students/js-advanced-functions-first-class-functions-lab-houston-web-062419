function returnFirstTwoDrivers(array) {
	const fun =  function (array) {
		return Array.from([array[0], array[1]])
	}
	return fun(array)
}
console.log(returnFirstTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia']))

function returnLastTwoDrivers(array) {
	const fun =  function (array) {
		return Array.from([array[array.length - 2], array[array.length - 1]])
	}
	return fun(array)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers[0])
function createFareMultiplier(fare) {
	return function (mult) {
		return fare * mult
	}
}
function fareDoubler(fare) {
	const dm = createFareMultiplier(fare)(2)
	return dm
}
function fareTripler(fare) {
	const dm = createFareMultiplier(fare)(3)
	return dm
}
function selectDifferentDrivers(drivers, func) {
	return func(drivers)
}