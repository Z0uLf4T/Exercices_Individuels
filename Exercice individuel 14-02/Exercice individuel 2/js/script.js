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
if (givenNumber==toBeGuessed) {
    alert("Bravo ! Vous avez deviné le nombre.");
    return true
} else if (givenNumber<toBeGuessed) {
        alert("Plus grand");
        return false
    } else {
        alert("Plus petit");
        return false
    }
    
}

//didIWin(givenNumber)


/*Etape 3*/
//Création de la fonction gamePlay qui rappelle les fonctions tant que le nombre n'est pas égal à 22

function gamePlay(){
    player1()
    console.log(toBeGuessed)
    askNumber();
    console.log(givenNumber);
    //didIWin(givenNumber);  
    while(didIWin(givenNumber)===false)
    askNumber();
    //didIWin(givenNumber)
}

gamePlay()


/*Etape 4*/

/*fonction pour demander un nombre à deviner au player 1*/

function atGuess(){
    toBeGuessed = prompt("Entrez un nombre entre 0 et 50.");
    console.log (toBeGuessed);
    return toBeGuessed
}

//atGuess()


/*fonction qui redemande un nombre tant qu'il n'est pas compris entre 0 et 50*/
function player1(){
    //atGuess();
    //console.log(toBeGuessed);
    while(atGuess()>50);
    //atGuess();
    return toBeGuessed
}

//player1()


