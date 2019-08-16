// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    let array = drivers.slice(0,2)
    return array
}

function returnLastTwoDrivers(drivers){
    let array = drivers.slice(-2)
    return array
}

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function something(value) {return integer * value}
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}