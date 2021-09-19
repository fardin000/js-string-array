// function addNumbers(num1, num2){  
//      result = num1 + num2;
//     return result;
// }
// const sum =  addNumbers(23, 13);
// console.log(sum);




////////////////////////////////////////////////////////
//for loop chalaye jekono sonkhok arguments er operative output dea possible
///////////////////////////////////////////////////////

function addNumbers(num1, num2){ 
//arguments je koytai thak na keno 
// console.log(arguments[1]);
// arguments e push/pop kicchu nai arrayr moto;
//arguments holo array like object;
let result = 0;
    for(const num of arguments){
        // console.log(num);
        result = result + num;   
    }
    // arguments.push(45); 
    //kaj korbena oporer line;
    // const result = num1 + num2;
    return result; 
    //when your function does not return any data/value then output shows this point as undefined;
}
const sum =  addNumbers(23, 13, 50, 100, 420, 50, 100, 45, 76, 198, 901);
// console.log(sum);




////////////////////////////////////////////////////////
//string jora diye parse kore output dite pari
///////////////////////////////////////////////////////
function getFullName(firstName, lastName){
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ' ;
        //string beshi join korle performance e problem hoy
    }
    return fullName;
}
const allName = getFullName('Omuk','Songket', 'bin', 'Hanif', 'Songket', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
// const name = getFullName('Hanif', 'Songket' );
console.log(allName);




////////////////////////////////////////////////////////
//same function comment less
///////////////////////////////////////////////////////
function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ' ;
    }
    return fullName;
}
const allName = getFullName('Omuk','Songket', 'bin', 'Hanif', 'Songket', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(allName);