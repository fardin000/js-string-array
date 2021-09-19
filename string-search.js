const products =  [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
]

// const searching = 'laptop';
// const searching = 'Dell';
const searching = 'dell';
//upperCase/LowerCase jetai use kori na keno same result e ashbe, karon sobaike lowerCase kora hoise

//remember ::: string is not an array but array like object;

//indexof use korte pari;
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        //toLowerCase koer dile 2 ta object/object/string er moddhe tulona sohoj hoy;
        // output.push(product);
    }
}
// console.log(output);
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);

//*********************************************************** */
//jodi amra check korte chai je string er moddhe search kora jinista ache kina taile amader option holo :

// 1.indexof diye check kore,
// ***2.includes diye kora jabe,
// ***3.startsWith diyeo kora jabe;(optional case)
// ***4. endsWith diyeo alada bises request set kora jabe;(google it);

//kono jinis khojar somoy jetar moddhe khujteci seitake lowerCase kore nibo +++++++ jetake khujteci seitakeo lowerCase kore nibo;

//********************************************************* */