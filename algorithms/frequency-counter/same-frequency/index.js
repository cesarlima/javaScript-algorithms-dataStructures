/**
 *  Write a function called sameFrequency. Given two positive integers, find out if the two numbers
 *  have the same frequency of digits.
 * 
 *  Your solution MUST have the complexities: Time: O(N)
 */

(function() {
    'use strict'

    function sameFrequency(num1, num2) {
        const strNum1 = String(num1)
        const strNum2 = String(num2) 
        let numCounter1 = {}
        let numCounter2 = {}

        if (strNum1.length !== strNum2.length) return false

        for (const n of strNum1) {
            numCounter1[n] = (numCounter1[n] || 0) + 1
        }

        for (const n of strNum2) {
            numCounter2[n] = (numCounter2[n] || 0) + 1
        }

        for (const key in numCounter1) {
            if ((key in numCounter2) === false) return false

            if (numCounter1[key] !== numCounter2[key]) return false
        }

        return true
    }

    console.assert(sameFrequency(182, 281) === true, 'should return true')
    console.assert(sameFrequency(34, 14) === false, 'should return false')
})()
