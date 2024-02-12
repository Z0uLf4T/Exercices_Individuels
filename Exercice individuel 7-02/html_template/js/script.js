/* Etape 1*/

function askName(){

/*fenêtre pour demander le nom*/
let userName = prompt("Quel est votre nom ?");
console.log(userName);

/*message hello concaténé à afficher*/
let hello = "👋 Bonjour " + userName + "!";
console.log(hello);

/*affichage du message hello dans html*/
document.body.innerHTML += `<h2>${hello}</h2>`;
}



/*Etape 2*/

/*déterminer la date d'aujourd'hui*/
const today = new Date(); 
console.log (today);

function askBirthYear(){

/*fenêtre pour demander l'année de naissance*/ 
let birthYear = prompt("Quel est votre année de naissance ?");
console.log(birthYear);

/*calcul de l'âge à partir de l'année de naissance*/
    
    /*déterminer l'année actuelle*/
let currentYear = today.getFullYear();
console.log (currentYear);

    /*comparaison avec l'anné de naissance*/
let ageCalculation = currentYear - birthYear;
console.log(ageCalculation);

/*message userAge concaténé à afficher*/
let userAge = "Vous avez " + ageCalculation + " ans.";
console.log(userAge);

/*affichage du message userAge dans html*/
document.body.innerHTML += `<h3>${userAge}</h3>`;

/*ressortir la valeur ageCalculation pour l'utiliser dans la fonction askMonth()*/
return ageCalculation;
}


/*Etape 3*/

/*appel des fonctions créées*/

askName()
askBirthYear()
/*attention le console.log de la fonction va appeler de nouveau la fonction et donc relancer une fenêtre prompt*/


/*Etape Bonus : Préciser le calcul de l'âge à partir du mois de naissance*/

/*Ajustement de l'âge en fonction du mois de naissance*/

/*fenêtre pour demander le mois de naissance*/
let birthMonth = prompt ("Quel est votre mois de naissance ?");
console.log(birthMonth);

/*convertir en nombre*/

const monthName = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aôut","Septembre","Octobre","Novembre","Décembre"]

/*boucle pour comparer birthMonth avec le tableau monthName et resortir l'index (il sera comparé à currentMonthNumber)*/

let monthNumber

for (let index = 0; index < monthName.length; index++) {
    if(birthMonth == monthName[index]){
        let monthNumber =index
        console.log(monthNumber)
    }  
}

console.log(monthNumber)

    /*déterminer le mois actuel*/
let currentMonthNumber = today.getMonth();
console.log(currentMonthNumber);
    
/*comparaison du mois de naissance avec le mois actuel*/
if (monthNumber<currentMonthNumber) {
    console.log("Vous avez "+ askBirthYear() - 1 + "ans !");
} else {
    console.log("Vous avez "+ askBirthYear() + "ans !");
}

