/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

 function reverse(text) {
     let reversedText = ''

     function selectCaractere(index) {
         if (reversedText.length === text.length) return
         reversedText += text.charAt(index)

         selectCaractere(index - 1)
     }

     selectCaractere(text.length)

     return reversedText
 }

 console.log(reverse('Write'));
 console.log(reverse('awesome'));
 console.log(reverse('rithmschool'));