// Code your solution in this file!
const returnFirstTwoDrivers = function (first) {
return first.slice (0,2)
}


const returnLastTwoDrivers = function (last) {
    return last.slice(2,4); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (n) {
    return function fare() {
      return n * n;
    }

}
const fareDoubler = function doubleFare (createFareMultiplier) {
    return createFareMultiplier * 2; 
}

const fareTripler = function tripleFare (createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers (drivers);
}