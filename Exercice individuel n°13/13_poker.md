# 1. Enoncé

Cet exercice individuel consiste à écrire la logique d'un jeu de poker suivant les règles du Texas hold'em.

*Contraintes:*

- Langage : libre
- Une approche orientée objet sera à adopter à partir de l'étape 4

## Étape 1

Écrire une fonction `createDeck` qui génère un deck de 52 cartes à jouer sous forme d'un tableau de chaines de caractères type `1♠︎` ou `V♣︎`.

Utiliser une fonction qui mélange automatiquement le tableau de carte (le javascript ne possède pas de fonction shuffle. Chercher un equivalent ou une implementation).

Rappel : les cartes vont de 1 (As) à 10 puis Valet (J), Dame (Q) et Roi (K). Les types sont `♠︎♣︎♡♢`.

## Étape 2

Pour la suite, un deck sera déclaré et stocké dans une constante `deck`.

Écrire une fonction `deal` qui distribue (et donc retire du deck) un nombre de carte, le nombre doit être donné en paramètre.

Créer une variable par joueur. Chaque joueur doit recevoir 2 cartes.

Partant sur 2 joueurs, on aura donc :

```
const player1 = deal(2)
const player2 = deal(2)
```

## Étape 3

Écrire une fonction `flop` qui retournera le flop, c'est à dire les 5 cartes posées au centre du jeu, communes à tous les joueurs. 

La fonction utilisera la fonction `deal` et exécutera les tours comme un veritable croupier, en brulant les cartes entre chaque.

Les tours sont composés de la manière suivante :

- Premier tour = 1 carte brulée, 3 cartes sorties
- Deuxième tour = 1 carte brulée, 1 carte sortie
- Troisième tour = 1 carte brulée, 1 carte sortie

Les cartes tirées seront stockées dans une variable `cards`

## Étape 4

Reprendre l'exercice et y appliquer une approche orientée objet. 

Concevoir une classe pour representer l'entité carte qui sera ensuite manipulée par les fonctione précédemment écrites.

## Etape 5

Écrire une fonction `showdown` qui affichera la main d'un joueur. 

Elle prendra donc, en premier paramètre, les deux cartes d'un joueur, et en second le flop (`cards` déclaré en niveau 3).

Une main de joueur peut posséder les éléments suivants : une ou deux paires, un brelan, un carré, une couleur, une suite ou une quinte.

Pour plus de détails, voir la [page Wikipédia](https://fr.wikipedia.org/wiki/Main_au_poker#Ordre_des_niveaux_des_mains) sur les mains au poker.
