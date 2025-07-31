const marvel_heros = ["thor","Ironman","ishu"]
const dc_heros = ["vansh","viraj","ashwani"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// concat ka use ham two array ko add karne ke liye karte hai


// console.log(allHeros);


const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[,4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)// .flat sub array ko saperate array me convert kar deta hai

console.log(real_another_array);


console.log(Array.isArray("ishu"))
console.log(Array.from("ishu"))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
