//Annexe 1
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
//etape 1: 
function getLatinCharacterList(text2encode){
return text2encode.split("")
}
console.log(getLatinCharacterList("Eid , Mubarak"))

//etape2:
function translateLatinCharacter(letter){
    return latinToMorse[letter]
   }
console.log(translateLatinCharacter("A"))

//etape3:
function encode(text) {
    let characters=getLatinCharacterList(text);
    let resultat=characters.map(char=> translateLatinCharacter(char.toUpperCase()));
    return resultat.join(' ');
}
console.log(encode('je ne comprend rien '))
console.log(encode("Eid , Mubarak"))
