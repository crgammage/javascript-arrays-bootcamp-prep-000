var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candystring) {
  chocolateBars.upshift(candyString);
  return chocolateBars
}
