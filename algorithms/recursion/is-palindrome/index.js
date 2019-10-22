/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
 * (reads the same forward and backward). Otherwise it returns false. cac
 */

 function isPalindrome(word) {
    let startIndex = 0
    let palindrome = true

    function compareWord(endIndex) {
        if (word.charAt(startIndex) != word.charAt(endIndex)) {
            palindrome = false
            return
        }

        if (startIndex === endIndex) return

        startIndex++
        compareWord(endIndex - 1)
    }

    compareWord(word.length - 1)

     return palindrome
 }

 console.log(isPalindrome('awesome'))
 console.log(isPalindrome('foobar'))
 console.log(isPalindrome('tacocat'))
 console.log(isPalindrome('amanaplanacanalpanama'))