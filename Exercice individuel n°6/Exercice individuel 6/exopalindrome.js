/* quelques date pour vérifier nos fonctions */
let date = "29/02/2024"
let dateTest1 = "10/03/2024"
let dateTest2 = "33/02/2022"
let dateTest3 = "25/18/2033"
let dateTest4 = "14/02/2041"

/* --- Etape 1 --- */

function validDate(date) {
  let dateArray = date.split("/");
  let day = parseInt(dateArray[0]);
  let month = parseInt(dateArray[1]);
  let year = parseInt(dateArray[2]);
  let leapYearcheck = bissextileCheck(year);
  if (isValidYear(year) == true && isValidMonth(month) == true && isValidDay(month, day, leapYearcheck)) {
    return true
  } else {
    return false
  }
}

console.log(validDate(date))
console.log(validDate(dateTest1))
console.log(validDate(dateTest2))
console.log(validDate(dateTest3))
console.log(validDate(dateTest4))

/* Année bissextile ? --> (année divisible par 400) ou (divisible par 4 et pas par 100)*/
function bissextileCheck(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  } else {
    return "NOT a Leap Year";
  }
}

/* Année valide ?*/
function isValidYear(year) {
  if (year > 999 && year <= 9999) {
    return true
  } return false
}

/* Mois valide ?*/
function isValidMonth(month) {
  if (month > 0 && month <= 12) {
    return true
  } return false
}

/*Jour valide ?*/
function isValidDay(month, day, leapYearcheck) {
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    if (day > 0 && day <= 31) {
      return true
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day > 0 && day <= 30) {
      return true
    }
  } else if ((month == 2)) {
    if (leapYearcheck === "Leap Year") {
      if (day > 0 && day <= 29) {
        return true
      }
    } else if (leapYearcheck === "NOT a Leap Year") {
      if (day > 0 && day <= 28) {
        return true
      }
    }
  } return false
}

/* --- Etape 2 --- */

function isPalindrome(date) {
  if (validDate(date) == true) {
    let dateArray = date.split("/")
    let yearReversed = dateArray[2].split("").reverse().join("")
    let ddMMJoined = dateArray.slice(0, 2).join("")
    if (ddMMJoined == yearReversed) {
      return true
    }
  }
  return false
}

console.log(isPalindrome(date))
console.log(isPalindrome(dateTest1))
console.log(isPalindrome(dateTest2))
console.log(isPalindrome(dateTest3))
console.log(isPalindrome(dateTest4))

/* --- Etape 3 --- */


