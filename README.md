## Clac Des Doigts - Chicken
<br/>

# But du projet
Créer une API avec NodeJS avec un Webservice "/chicken" en tant que CRUD avec les requêtes suivantes :
- POST
- PUT
- GET
- PATCH
- DELETE

Le projet doit contenir un objet "chicken" avec les propriétés suivantes :
- name: String (required),
- birthday: Date,
- weight: Number (required),
- steps: Number (default 0),
- isRunning: Boolean (default false)

Il doit également y avoir le webservice "/chicken/run" servant à incrémenter les *steps* du Chicken de 1.

Le choix du type de base de données et du Framework de l'API est libre.
<br />

# Technologies utilisées
- API : NodeJS + ExpressJS
- Base de données : MongoDB

<br/>

# Installation des dépendances
- Installez NodeJS en cliquant [ici](https://nodejs.org/en/download)
- Exécutez cette commande dans le dossier du projet
```
npm i
```

<br />

# Lancement du projet
```
npm run start
```
