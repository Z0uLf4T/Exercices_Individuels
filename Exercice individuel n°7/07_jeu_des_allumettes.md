# 1. Enoncé

On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .). Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

*Contraintes:* 

- Langage : JS ou Python.
- Suivez les étapes.
- Une fonctionnalité = une fonction.

## Étape 1

Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste. 

Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

_JS_
--> Création de la variable matchesInBox initialisée à 50 allumettes
--> Création de la fonction removeMatches() qui prend en paramètre un nombre matches2Remove et qui retourne matchesInBox retirée de la valeur de matches2remove

## Étape 2

Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

_JS_
--> Création de la fonction askNumber2remove() avec une boucle while qui affiche un prompt pour demander et récupérer matches2Remove, le nombre d'allumette à retirer tant que matchesInBox est supérieur à 0.
--> Appel de la fonction removeMatches() pour tester la boucle while.
--> Création d'un alert pour indiquer qu'il n'y a plus d'allumettes lorsque matchesInBox est égal à 0.

## Étape 3

Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.

Ajouter a votre jeu la notion de victoire.

_JS_
--> Création de la fonction checkMatchesNumber() qui affiche un alert pour entrer un nombre entre 1 et 6 si matches2Remove n'est pas compris entre 1 et 6.
--> Création de la fonction declareWinner() qui affiche un alert indiquant que le joueur a gagné.
--> Ajout des fonctions checkMatchesNumber() et declareWinner() à la boucle while de la fonction askNumber2remove().

## Étape 4

Rajouter un 2eme joueur à votre jeu.

_JS_


## Étape **5**

Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.

## Étape 6

Libre à vous de faire une interface graphique à votre goût !
