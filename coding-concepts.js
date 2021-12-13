// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
  console.log(cohort.split(""))

// a) Your answer: Basically will split each character into tokens. e.g., "E", "c", "h", "0", "", "2", "0", "2", "1")
// b) Verify and explain: When you split by an empty string it splits every character into an array including spaces.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: greeter doesn't return anything.
// b) Verify and explain: In this case it will be undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer: 8, 10, 12, 14, 16
// b) Verify and explain: Each number in the array was multiplied by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer: 11, 13, 15.
// b) Verify and explain: Every number that is odd will be retuned.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: It will return JavaScript
// b) Verify and explain: It calls languages on the object which points to an array and the first index in JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: it will log a Learn {...} instance
// b) Verify and explain: You create a new object called learnStudent with the name of George. This object has all the properties defined
// in the constructor.
