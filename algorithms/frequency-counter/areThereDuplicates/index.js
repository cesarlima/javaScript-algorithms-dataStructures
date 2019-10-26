/**
 *  Implement a function called, areThereDuplicates which accepts a variable number of arguments
 *  and checks whether there are any duplicates among the arguments passed in.
 * 
 *  Restrictions:
 *  Time - O(n)
 *  Space - O(n)
 */

 (function() {
    'use strict'

    function areThereDuplicates() {
      let params = {}

      for (const iterator of arguments) {
         params[iterator] = (params[iterator] || 0) + 1
      }

      for (const key in params) {
         if (params[key] > 1) return true
      }

        return false
    }
    
    console.assert(typeof areThereDuplicates === 'function', 'should areThereDuplicates be a function')
    console.assert(areThereDuplicates(1, 2, 'eeee') === false, 'should return false')
    console.assert(areThereDuplicates(1, 2, 2, 'eeee') === true, 'should return true')
    console.assert(areThereDuplicates('a', 'b', 'c', 'a') === true, 'should return true')
 })()
 