var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  return chocolateBars.upshift('element')
}
