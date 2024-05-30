/* Etape 1 */

/* déclarer une variable avec valeur de départ à O. 
déclarer une fonction qui un prend un nombre à retirer. retourner la variable de départ soustrait du nombre entré en argument */

let matchsInBox = 50;

function removeMatchsNumber(matchsToRemove) {
    return matchsInBox -= matchsToRemove
}

/* console.log(removeMatchsNumber(4)); */
/* console.log(removeMatchsNumber(6)); */
/* Etape 2 */

function askMatchsNumber() {
    while (matchsInBox > 0) {
        matchsToRemove = prompt("Enter a number of matchs to remove from the box.");
        if (matchsToRemove > 6 || matchsToRemove < 1) {
           alert("Enter a valid number between 1 and 6.")
        } else {
            removeMatchsNumber(matchsToRemove);
            console.log(matchsInBox)
            alert(`${matchsInBox} lasting.`)
        }  
    }
    return "You win !"
}

document.getElementById("matchsInBox").innerHTML = askMatchsNumber()

/* Demander un nombre à retirer tant que le nombre d'allumettes est supérieur à 0*/

/* Etape 3 */

/* faire une condition si le nombre d'allumettes entré est inférieur à 1 ou supérieur à 6, redemander un nombre car faux */

