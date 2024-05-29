const colors = ["blue", "red", "yellow", "green"];

let combinationPlayer1 = ["blue", "red"];

let propositionPlayer2 = ["blue", "red"];

const trueColor = (propositionPlayer2) => {
  //la fonction truecolor sert a verifier que dans propositionPlayer2
  // il existe que  des couleurs du tableau "colors"
  // for each color il va verifier (comparer)
  let allElementsExist = true;
  propositionPlayer2.forEach((element) => {
    if (colors.includes(element) == false) {
      allElementsExist = false;
    }
  });
  console.log(allElementsExist);
  return allElementsExist;
};
// trueColor(propositionPlayer2);
//console.log(trueColor(proposition));
const checkCombination = (propositionPlayer2) => {
  let combinationChecked = true;
  if (propositionPlayer2.toString() !== combinationPlayer1.toString()) {
    combinationChecked = false;
  }
  console.log(combinationChecked);
  return combinationChecked;
};
// checkCombination(propositionPlayer2);

const gamePlay = () => {
  while (checkCombination(propositionPlayer2) == false) {
    trueColor(propositionPlayer2);
    checkCombination(propositionPlayer2);
  }
  console.log("You win");
};
gamePlay();




















