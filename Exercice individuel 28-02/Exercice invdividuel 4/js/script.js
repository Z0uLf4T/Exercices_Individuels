//Etape 1 --> fonction getLatinCharacterList

//déclaration de la variable text pour contenir le texte
const text = ''

//déclaration de la fonction
function getLatinCharacterList(text) {
   result = text.split(''); 
   return result
}

//test de la fonction
console.log(getLatinCharacterList("Hello, world"))

//Etape 2 création de la fonction translateLatinCharacter

//déclaration tableau correspondance latin alphabet to morse
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

//déclaration de la variable character pour contenir la lettre latine à traduire
const letter = ''

//déclaration de la fonction qui va chercher la valeur morse associé à la clé letter
function translateLatinCharacter(letter) {
   morse =  latinToMorse[letter]
    return morse
}

console.log(translateLatinCharacter('S'))


// Etape 3 création d'une fonction qui traduit chaque lettre

function encode(result) {
    return
}

