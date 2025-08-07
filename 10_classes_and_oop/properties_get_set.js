// Simple explanation:
// Property (property): Kisi object ka attribute ya value hota hai, jaise person.name ya person.age.

// Getter: Ek special function (method) jo aapko object property ki value padhne (get) deta hai. Jab aap property ko access karte ho, getter automatically chal jaata hai.

// Setter: Ek special function jo object property ki value set ya badalne (write) ke liye hota hai. Jab aap property ko nayi value assign karte ho, setter automatic call hota hai.

// Example 
const person = {
  firstName: 'Ravi',
  lastName: 'Kumar',

  // Getter - poora naam milta hai jab fullName ko read karo
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  // Setter - fullName set karne par ye first and last name ko alag karta hai
  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Getter use karna:
console.log(person.fullName);  // Output: Ravi Kumar

// Setter use karna:
person.fullName = 'Anjali Singh';
console.log(person.firstName); // 
console.log(person.lastName);  // 


// Points to note:
// Getter aur Setter ko properties ki tarah use kiya jaata hai, matlab function ki tarah call nahi karte (no parentheses).

// Getter sirf padhna allow karta hai; Setter value set karne ke liye responsible hota hai.

// Iska fayda hai ki aap apni properties par control rakh sakte ho, jaise data ko validate karna ya value ko format karna before assign karna.