var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString) {
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.slice()
  return chocolateBars
}
