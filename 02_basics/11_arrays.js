const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros[3][1]);

const allhero = marvelHeros.concat(dcHeros)
console.log(allhero);

const allNewHero = [...marvelHeros,...dcHeros];
console.log(allNewHero);
console.log(typeof(allhero));
console.log(typeof(allNewHero));

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("anuja"))
console.log(Array.from("anuja"))
console.log(Array.from({name:"Anuja"})) //interview

let score1 =100;
let score2 =200
let score3 = 300;

console.log(Array.of(score1,score2,score3));

