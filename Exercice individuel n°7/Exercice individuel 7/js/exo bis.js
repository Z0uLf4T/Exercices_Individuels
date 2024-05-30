let matchesInBox = 50;

/* -- Etape 1 -- */
function removeMatches(matches2Remove) {
    return matchesInBox = matchesInBox - matches2Remove
};

//console.log(removeMatches(4))

/* -- Etape 2 -- */

function askNumber2remove() {
    while (matchesInBox > 0) {
        matches2Remove = prompt("Combien d'allumettes voulez-vous retirer ?");
        console.log("allumettes à retirer", matches2Remove);
        checkMatchesNumber(matches2Remove);
        removeMatches(matches2Remove);
        console.log("allumettes restantes par tour", matches2Remove);
        alert(`${matchesInBox} allumettes restantes.`)
    }
    console.log("nombre d'allumettes", matchesInBox);
    //alert("Il n'y a plus d'allumettes");
    declareWinner();
}

askNumber2remove();

/* -- Etape 3 -- */

function checkMatchesNumber(matches2Remove) {
    if (matches2Remove > 6 || matches2Remove < 1) {
        alert("Veuillez choisir un nombre entre 1 et 6.");
        matches2Remove = 0;
    }
};

function declareWinner() {
    // if (matchesInBox = 0) {
    alert("Bravo, Vous avez gagné !");
    console.log("Bravo, Vous avez gagné !");
    // }
};

/* -- Etape 4 -- */