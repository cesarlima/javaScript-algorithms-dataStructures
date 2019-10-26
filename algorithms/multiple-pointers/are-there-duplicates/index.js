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

    function areThereDuplicates(...args) {
        args.sort(function (a, b) {
            if ( a > b) return 1
            if (a < b) return -1
            if (a === b) return 0
        })

        let firstPoint = 0
        let secondPoint = 1

        while (secondPoint < args.length) {
            if (args[firstPoint++] === args[secondPoint++])
                return true
        }

        return false
    }

    console.assert(typeof areThereDuplicates === 'function', 'should areThereDuplicates be a function')
    console.assert(areThereDuplicates(1, 2, 3) === false, 'should return false')
    console.assert(areThereDuplicates(1, 2, 3, 2) === true, 'should return true')
})()
