
/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    if (num1 > num2) {
      return num1;
    }
    if (num1 < num2) {
      return num2;
    }else {
      return "Those are equal!";
    }

}

console.assert(max(2, 18));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";

    if (num1 > (num2 && num3)) {
      return num1;
    }
    if (num2 > (num1 && num3)) {
      return num2;
    }
    if (num3 > (num1 && num2)) {
      return num3;
    }
    if ((num1 === num2) || (num1 === num3) || (num2 === num3)) {
      return "Two or more of these are the same!"
    }
}

console.assert(maxOfThree(57,2,-1));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if (('a' === char) || ('e' === char) || ('i' === char) || ('o' === char) || ('u' === char)) {
      return true;
    }
    if ('y' === char) {
      return "Well, sometimes!";
    }else {
      return false;
    }
}

console.assert(isVowel('a'));



// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    // var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k',
    // 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    // var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  var spraketed = "";
    for (var i = 0; i < phrase.length; i++){
      var letter = phrase.charAt(i);

      if (isVowel(letter)|| (letter === " ")) {
        spraketed += phrase.charAt(i);
      }else {
        spraketed += (letter + "o" + letter);
      }

    }
  return spraketed;
}
console.assert(rovarspraket("I like cheese"));


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------



function sum(numArray){
    "use strict";
    var added = numArray[0] + numArray[1] + numArray[2] + numArray[3];
    return added;
}

function multiply(numArray){
    "use strict";
    var multiplied = numArray[0] * numArray[1] * numArray[2] * numArray[3];
    return multiplied;
}

var array = [2, 9, 17, 1];

console.assert(sum(array));
console.assert(multiply(array));



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";

    var reversed = [];

    for (var i = 0; i < phrase.length; i++) {
      reversed.unshift(phrase[i]);
    }
    for (var i = 0; i < reversed.length; i++) {
      var newPhrase;
      newPhrase += reversed[i];
    }
    // var newPhrase = reversed[9] + reversed[8] + reversed[7] + reversed[6] + reversed[5] + reversed[4]
    //                 + reversed[3] + reversed[2] + reversed[1] + reversed[0];
    return newPhrase;
}

console.assert(reverse("bottle neck"));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

var wordArray = ["red", "accord", "trashcan", "doorsteps"];

function findLongestWord(words){
    "use strict";

  for (var i = 0; i < words.length; i++) {
      // wordLengths.push(words[i].length);
      var longestWordLength = 0;
      if(words[i].length > longestWordLength){
      longestWordLength = words[i].length;
    }

  }

return longestWordLength;

}

// console.log(findLongestWord(wordArray));
console.assert(findLongestWord(wordArray)==9);


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var newWords = ["table", "autograph", "lamp", "car"];

function filterLongWords(words, i){
    "use strict";
    var longWords = [];

    for (var j = 0; j < words.length; j++) {
      if (words[j].length > i) {
        longWords.push(words[j]);
      }
    }
    return longWords;
}

console.assert(filterLongWords(newWords, 5));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
  var freqList = {};
  for (var i = 0; i < string.length; i++) {

    if (string.charAt(i) in freqList) {
      freqList[string.charAt(i)] += 1;
    }
    else {
      freqList[string.charAt(i)] = 1;
    }
  }

return freqList;
console.log(freqList);
}

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
// {a: 7, b: 14, c: 3, d: 3}
