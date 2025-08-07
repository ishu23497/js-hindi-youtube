// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}hitesh`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.email);




// **Getter aur Setter kya hote hain, aasan bhaasha mein:**

// - Sochiye ke aapke paas ek **dibba (box)** hai jisme aap kuch cheezein rakhte ho.  
// - **Getter** wo special tareeka hai jis se aap us dibbe se koi cheez nikaal sakte ho. Matlab, jab aap bola karo, “Bhai, mujhe woh cheez do,” to getter wo cheez aapko la ke deta hai.  
// - **Setter** wo tareeka hai jisse aap us dibbe mein nayi cheezein daal sakte ho. Jab aap bolo, “Yeh nayi cheez dibbe mein daal do,” to setter us cheez ko dibbe mein achhe tariqe se set karta hai.

// JavaScript mein yeh dumdaar feature aapko object ki properties ko control karne ka moka deta hai. Matlab aap decide kar sakte ho ki jab koi property ko padhna chahe to kya ho, aur jab koi nayi value dena chahe to kaise handle karoge.

// **Ek chhota example aapke saamne bolke:**

// “Maan lo mere paas ek insaan hai jiska naam do hisson mein hai — pehla naam aur last naam. Agar mujhe poora naam ek saath chahiye, to getter use karunga jo dono naam jod ke de dega. Aur agar koi poora naam mujhko de de, to setter use karunga jo us poore naam ko do tukdo mein baant ke dono alag alag set kar dega.”

// Agar aapko chahiye, toh main ye example aur aapke saamne live code karke bhi dikha sakta hoon. Aap batayiye, kya chahiye?


const person = {
  firstName: 'Rahul',
  lastName: 'Sharma',
  
  // Getter: jab person.fullName access karenge, ye chalega
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  
  // Setter: jab person.fullName ko koi nayi value denge, ye chalega
  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Getter ko use karte hain:
console.log(person.fullName); 
// Output: Rahul Sharma

// Setter ko use karte hain:
person.fullName = 'Neha Singh'; 
console.log(person.firstName); 
// Output: Neha
console.log(person.lastName);  
// Output: Singh
