// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// First I need to check to see if a value is divisble by three and has no remainder (modulus)
// Once I know this, we can return a string based on a conditional (e.g., n % 3 === 0)
// Return a string that matches the test case and we should have passing test(s)

const isDivisibleByThree = (number) => {
  return (number % 3 === 0) ? `${number} is divisble by three` : `${number} is not divisible by three`;
}
// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

describe('isDivisibleByThree', () => {
  it('should be divisible by three when given 15', () => {
   expect(isDivisibleByThree(15)).toEqual("15 is divisble by three")
  })
  it('should be divisible by three when given 0', () => {
   expect(isDivisibleByThree(0)).toEqual("0 is divisble by three")
  })
  it('should NOT be divisible by three when given -7', () => {
   expect(isDivisibleByThree(-7)).toEqual("-7 is not divisible by three")
  })
})


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// First, I need to return a new instance of the array "nouns" and transform each noun
// We can either build an array manually, or by using the Map method
// We can then call toUpperCase() on each noun while iterating through the array

const capitalized = (nouns) => {
 return nouns.map(noun => noun.toUpperCase());
};

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe('capitalized', () => {
  it('should return an array of all capitalized words', () => {
   expect(capitalized(randomNouns1)).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
   expect(capitalized(randomNouns2)).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO", "DEDUCTION"])
 });
});




// b) Create the function that makes the test pass.
// I normalized the string to make it all lowercase (sanity check)
// We check to see when looping through the string, if the position is equal to either "a", "e", "i", "o", "u"
// Once we find a match, we return immediately what the index is
// Otherwise, return -1 which is usually kinda of standard that translates to "not found"

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

const findVowel = (str) => {
  var normalized = str.toLowerCase();

  for (let i = 0; i < normalized.length; i++) {
    if (str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u') {
      return i;
    }
  }
  return -1;
}
// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

describe('findVowel', () => {
  it('should be divisible by three when given "learn"', () => {
   expect(findVowel("learn")).toEqual(1)
  })
  it('should be divisible by three when given "academy"', () => {
   expect(findVowel("academy")).toEqual(0)
  })
  it('should NOT be divisible by three when given "challenges"', () => {
   expect(findVowel("challenges")).toEqual(2)
  })
})


// b) Create the function that makes the test pass.
