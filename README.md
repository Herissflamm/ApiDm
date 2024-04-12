## Exercice 

Un immeuble contient plusieurs appartements.
- Un immeuble peut disposer d'équipements communs (ascenseur, parc, hall, conciergerie, ..), et un même équipement commun peut se retrouver sur plusieurs immeubles. Il est à noter que certains de ses équipements communs ont des visés à but de sécurité (ex : extincteurs, portes coupe-feu, escalier extérieur, etc...), et que dans leur cas, une date de « dernière inspection » doit être enregistré.
- Décrire l'immeuble de telle manière à ce qu'il soit identifiable.
- Décrire l'appartement de telle manière à ce qu'il soit identifiable.
- Un appartement a un type (Studio, T2, T3,...), et de ce type dépend le nombre maximum théorique d'occupant.
- Un appartement a un propriétaire, et un propriétaire peut disposer de plusieurs appartements.
- Un apparentement peut avoir des options (balcon, cave privative, place de parking,..), et une même option peut se retrouver sur plusieurs appartements.
- Un appartement a plusieurs locataires, mais un locataire n'a qu'un seul appartement.
- Un 
Representes par une interface avec les particularités suivantes


## Installation

```bash
$ npm install
```
## Configuration du projet

Veuillez configurer le fichier app.module.ts avec les données de connexion à la base de donnée.
L'api a été développé avec une base de donnée MySQL nommé apidm
Dans le fichier app.module.ts, synchronize doit être a true pour la création des tables. Puis ce champ doit passé à false.
Après la configuration du projet, veuillez lancer la commande :

```bash
npm install mysql --save
```

## Running the app

```bash
$ npm run start:dev
```

