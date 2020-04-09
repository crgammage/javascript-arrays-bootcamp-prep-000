var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyStr = 'foo'

function addElementToBeginningOfArray(chocolateBars, element) {
  return [chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  return chocolateBars.upshift('element')
}
