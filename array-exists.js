function megaFriend(friends){

    //handling error input
    if(Array.isArray(friends) == false){
        return 'Please provide an array.';
    }

    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
// const myBigBuddy = megaFriend(friends);
const myBigBuddy = megaFriend(123);
// console.log(myBigBuddy);


if(friends.indexOf('Lion') != -1){   //******indexof jante hobe  */
    // console.log('Lion exists');
}

if(friends.indexOf('Fox') != -1){  //******indexof jante hobe  */
    console.log('Lion exists');
}
else{
    console.log('Fox does not exists');
    // console.log("Fox doesn't exists");
     //doesn't er jonne double quote use korte hobe;

}

//includes
if(friends.includes('Lion'))    {//******includes jante hobe  */
    // console.log('Lion exists');
}

// if(friends.includes('Lion.toLowerCase()'){
//     console.log('Lion exists');
// }

if(friends.includes('Lion') == true ){
    // console.log('Lion exists using includes');
}

//array concat 
const first = [1, 2, 3];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);