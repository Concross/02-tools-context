[![Build Status](https://travis-ci.com/Concross/02-tools-context.svg?branch=master)](https://travis-ci.com/Concross/02-tools-context)

#List
The module included in this repo exports a List class with similar functionality to the existing javascript Array

##Methods

###push(item)
- Expects a single parameter of any type and appends the `item` to the end of a list
- Returns the `length` of the list after appending

###pop()
- Ignores parameters
- Removes the last `item` in a list
- Returns the `item` removed, or returns `undefined` if list is empty

###slice(begin, end)
- Expects begin and end params
- `begin` defaults to `0` if no value is passed in
- `end` defaults to the last position in the list if no value is passed in
- Returns a copy of a list from `begin` index up to (excluding) the `end` index

###forEach(callback)
- Expects a callback function
- Calls the callback function for each `item` in the list
- Returns `undefined`

###map(callback)
- Expects a callback function
- Calls the callback function for each `item` in the list, passing the `item` as a parameter to the callback
- Returns a new list, does not mutate the original

###reduce(callback[, initialValue])
- Expects a callback, accepts an `initialValue`
- Calls a callback function that must be passed an `accumulator` and `currentItem` 
- Callback gets called for each `item` in the list, returning the value back to the `accumulator` which persists for each call
- Returns the `accumulator`

###filter(callback)
- Expects a callback
- Calls callback for each `item` in the list
- Pushes an `item` into a new list if callback returns `true`, otherwise skips `item`
- Returns a new list with all `items` that passed the callback