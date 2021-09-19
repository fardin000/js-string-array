const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numbersSliced = numbers.slice(4, 8);
//index 4 theke shuru kore 8 er age porjonto , kintu 8 number noy
// console.log(numbersSliced);
// // slice kore nileo main array er kono change hoyna , ager motoi thake;
// console.log(numbers);



// const numberSpliced = numbers.splice(4, 3);
//4 number index theke 4number soho next 2 ta mane mot 3ta elemetn remove kore dibe
//ke ke baad geche seta output dibe
// console.log(numberSpliced);
// console.log(numbers);
//splice korle original array theke element remove hoye jay , slice korle remove hoyna 



// const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
//4 number index theke 4no. soho next aro 2 ta mot = 3 ta element remove kore dibe ar notun 99, 111, 888, 777 -- egula jog kore dibe;

// const numberSpliced2 = numbers.splice(4, 3, 777);
//1ta item ke jog kore dibe

// const numberSpliced2 = numbers.splice(4, 0, 777);
// kono item e remove korbena (0) deyar karone

const numberSpliced2 = numbers.splice(4, 0, 777, 888, 999);
//kono item e remove korbena borong sathe aro jog korbe;
//
console.log(numberSpliced2);
console.log(numbers);