const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

// const words = anthem.split('');
// jodi ('')commar majhe space na dile prottek ta letter ke split korbe;

const words = anthem.split(' ');
// jodi (' ')commar majhe space diye kori tahole prottek ta word ke split korbe;
// console.log(words);

const withOutA = anthem.split('a');
// console.log(withOutA);

const smallSlice = anthem.slice(5, 13);
//index of 5 theke shuru kore 13 er age porjonto index pabo;
// console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 8);
//kono 1ta index theke shuru kore next koyta character dorkar seita bole deya hoy seita declare kora hoy comma diye diye (11, 8)--11 number index theke shuru kore next 8 ta string dorkar including space;
// console.log(anotherPart);

//substring
const againAnotherPart = anthem.substring(11, 15);
//11 theke shuru kore 15 er age porjonto dekhabe;
// console.log(againAnotherPart);

//concat---ination
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
// console.log(fullString);

///////////////////////////////////////////////
//string is immutable , 
//sting dont want to change ;
//////////////////////////////////////////////


//eita sting gulake eksathe dekhabe 
// const fullString = first.concat(second);
const fullString = first.concat(second).concat('Bank').concat('RJ kibria');
// console.log(fullString);



const words2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const allJoin = words2.join('');
// console.log(allJoin);


const words3 = ['alim', 'badhon','cameron', 'david'];
// const allJoin = words3.join(' ');
// console.log(allJoin);



const words4 = ['alim', 'badhon','cameron', 'david'];
// const allJoin = words4.join(',');
// console.log(allJoin);


const words5 = ['alim', 'badhon','cameron', 'david'];
// const allJoin = words5.join(', ');
// console.log(allJoin);


const words6 = ['alim', 'badhon','cameron', 'david'];
const allJoin = words6.join('www');
console.log(allJoin);