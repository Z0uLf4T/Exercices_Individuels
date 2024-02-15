/* Etape 1*/

/*Fenêtre pour demander un nombre*/
function askNumber(){
    givenNumber = prompt("Entrez un nombre.");
    console.log(givenNumber);
    return givenNumber;
}


//askNumber()

/*Etape 2*/
/*Création de la fonction didIWin*/

function didIWin(givenNumber){
if (givenNumber==22) {
    alert("Bravo ! Vous avez deviné le nombre.");
    return true
} else if (givenNumber<22) {
        alert("Plus grand");
        return false
    } else {
        alert("Plus petit");
        return false
    }
    
}


//Création de la fonction gamePlay qui rappelle les fonctions tant que le nombre n'est pas égal à 22

function gamePlay(){
    askNumber();
    console.log(givenNumber)
    //didIWin(givenNumber);  
    while(didIWin(givenNumber)===false)
    askNumber()
    //didIWin(givenNumber)
}

gamePlay()

