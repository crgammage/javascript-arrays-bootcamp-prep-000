var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candystring) {
  return chocolateBars.upshift(candyString)
}
