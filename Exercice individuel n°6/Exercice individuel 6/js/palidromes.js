let dateTest1 = "10/03/2024"
let dateTest2 = "33/02/2022"
let dateTest3 = "25/18/2033"

/* Etape 1 création une fonction isValidate pour vérifier le format de date
les années sont comprises entre 999 et 9999 --> 4 caractères

création d'une fonction maxDaysInMonth pour vérifier le nb de jours par mois*/

function isValidDate(date) {
    let formatedDate = date.split("/");
    let year = formatedDate[2];
    let month = formatedDate[1];
    let day = formatedDate[0];
    if (isValideYear(year) == true && isValideMonth(month) == true && maxDaysInMonth(month,day)){
        return true
    } else {
        return false
    }
}

console.log(isValidDate(dateTest1))
console.log(isValidDate(dateTest2))
console.log(isValidDate(dateTest3))

function isValideYear(year) {
    if (year > 999 && year <= 9999) {
        return true;
    } return false;
}

//console.log(isValideYear(4))
//console.log(isValideYear(1444))

function isValideMonth(month) {
    if (month >= 1 && month <= 12) {
        return true;
    } return false;
}


//console.log(isValideMonth(56))
//console.log(isValideMonth(6))

function maxDaysInMonth(month, day) {
    if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day >= 1 && day <= 31) {
        return true;
    } 
    if ((month == 4 || month == 6 || month == 9 || month == 11 ) && day >= 1 && day <= 30) {
        return true;
    } 
    if(month == 2 && day >= 1 && day <= 28){
        return true;
    }

    return false
}
console.log(maxDaysInMonth(4,31))


/*Etape 2 création d'une fonction isPalindrome pour vérifier si la date est 
un palindrome sans prendre en compte les slashs */


/*Etape 3 création d'une fonction getNextPalindromes qui donne les x prochaines 
dates palidromes */


//Etape 4 création une fonction is