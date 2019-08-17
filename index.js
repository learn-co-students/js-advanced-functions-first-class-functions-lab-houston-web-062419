// Code your solution in this file!
const returnFirstTwoDrivers = function(arr)
{
    return arr.slice(0,2) 
}
const returnLastTwoDrivers = function(arr)
{
    return arr.slice(arr.length-2,arr.length)
}
const selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers,returnLastTwoDrivers)
function createFareMultiplier(int){
    return function(fare){return int*fare}
}
const fareDoubler = function(int)
{
    return createFareMultiplier(int)(1)*2
}
const fareTripler = function(int)
{
    return createFareMultiplier(int)(1)*3
}
const selectDifferentDrivers = function(arry,returnFirstTwoDrivers)
{
    return returnFirstTwoDrivers(arry)
} 
