//annexe 1 : latinToMorse
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

// annexe 2 morseToLatin
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

/* -- Etape 1 Fonction getLatinCharacterList -- */

//déclaration de la variable text pour contenir le texte latin
//let text2encode = '';

//déclaration de la fonction getLatinCharacterList
function getLatinCharacterList(text2encode) {
    text2encode = text2encode.toUpperCase()
    // console.log(text2encode)
    latinCharactersList = text2encode.split('');
    return latinCharactersList
}

/*test de la fonction
console.log(getLatinCharacterList("Hello, world"));*/

/*Etape 2 --> de la fonction translateLatinCharacter*/

//déclaration de la variable character pour contenir la lettre latine à traduire
//const letter = '';

//déclaration de la fonction qui va chercher la valeur morse associé à la clé letter
function translateLatinCharacter(latinLetter) {
    morse = latinToMorse[latinLetter];
    if (latinLetter == ' ') {
        morse = '/'
    } else if (latinLetter == ',') {
        morse = '\n'
    }
    return morse
}

/*test de la fonction
console.log(translateLatinCharacter('S'));*/


// Etape 3 création d'une fonction encode qui traduit chaque lettre en morse
let translated = '';
function encode(text2encode) {
    // console.log(text2encode)
    getLatinCharacterList(text2encode);
    // console.log(latinCharactersList);
    // translated = '';
    for (let index = 0; index < latinCharactersList.length; index++) {
        const letter = latinCharactersList[index];
        //console.log(letter);
        translateLatinCharacter(letter);
        // console.log(morse);
        translated += morse + ' ';
    }
    // console.log(translated);
    return translated;
}

/* test de la fonction
text2encode = "bgeq"
console.log(encode(text2encode));*/


// Etape 4 création d'une fonction decode qui traduit du morse en lettre



//déclaration de la variable text pour contenir le texte morse
//const morseText = '';

//déclaration de la fonction getMosreCharacterList
function getMorseCharacterList(morseText) {
    morseList = morseText.split(" "); //-->> split the string after each space or slash
    return morseList
}

//test de la fonction
console.log(getMorseCharacterList("... --- ... / ... --- ..."))

//déclaration de la fonction translateMorseCharacter
//const morseCharacter = ""

function translateMorseCharacter(morseCharacter) {
    latinLetter = morseToLatin[morseCharacter];
    if (morseCharacter == "/") {
        latinLetter = ' '
    }
    return latinLetter
}

/*test de la fonction
console.log(translateMorseCharacter("/"))*/

// création de la fonction decode
//let text2decode = ''
let encoded = '';
function decode(text2decode) {
    getMorseCharacterList(text2decode)
    console.log(morseList)

    for (let index = 0; index < morseList.length; index++) {
        const morseCharacter = morseList[index];
        console.log(morseCharacter);
        translateMorseCharacter(morseCharacter);
        console.log(latinLetter);
        encoded += latinLetter;
    }
    console.log(encoded)
    return encoded
}
/*test de la fonction
text2decode = "... --- ... / ... --- ..."
console.log(decode(text2decode))*/


/*Etape 5*/

function encoding() {
    text2encode = document.getElementById("text2encode").value;
    console.log(text2encode);
    encode(text2encode)
    console.log(translated)
    document.getElementById("translated").innerHTML = translated;
}


function decoding() {
    text2decode = document.getElementById("text2decode").value
    console.log(text2decode)
    decode(text2decode)
    console.log(encoded)
    document.getElementById("decoded").innerHTML = encoded
}
