const integerNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

/* Etape 1 */

/* avec une boucle for*/

function sum1(array) {
    for (let index = 0; index < array.length; index++) {
       sum += array[index];  
    }
    return sum
} 

/*avec la méthode forEach*/
/*
function sum1(array) {
    array.forEach(element => {
        sum += element
    });
}
*/

/* avec la méthode reduce()*/
/*
function sum1(array){
    sum = array.reduce((total,amount)=> total += amount);
    return sum
}
*/

sum1(integerNumbers)
console.log(sum)

/* Etape 2*/

/*function sum2(array){

    if array[index] == array[0] {
        return totalSum = array[0]
    }
    console.log(array[index])
    return array[index] + sum2(array[index - 1])
}
*/

//console.log(integerNumbers[index])

/*sum2(integerNumbers)*/

