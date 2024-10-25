Guide d'Utilisation de l'API REST Node.js
Cette API REST permet de gérer une liste d'utilisateurs en mémoire en utilisant Node.js et Express. Elle supporte les opérations CRUD (Create, Read, Update, Delete) sur les utilisateurs.

Prérequis
Node.js et npm installés sur votre machine.
Un outil comme Postman pour tester les requêtes HTTP.
Installation
Cloner le dépôt

bash
Copier le code
git clone [URL de votre dépôt GitHub]
Installer les dépendances

bash
Copier le code
cd [nom-du-dossier-du-projet]
npm install
Démarrer le serveur

bash
Copier le code
npm start
Le serveur devrait maintenant être en cours d'exécution sur http://localhost:3000.

Utilisation de l'API
1. Récupérer tous les utilisateurs
Requête : GET http://localhost:3000/users

Réponse :

json
Copier le code
[
  { "id": 1, "firstName": "John", "lastName": "Doe", "role": "admin" },
  { "id": 2, "firstName": "Jane", "lastName": "Smith", "role": "user" },
  { "id": 3, "firstName": "Alice", "lastName": "Johnson", "role": "moderator" },
  { "id": 4, "firstName": "Bob", "lastName": "Brown", "role": "user" },
  { "id": 5, "firstName": "Charlie", "lastName": "Davis", "role": "admin" }
]
2. Récupérer un utilisateur par ID
Requête : GET http://localhost:3000/users/1

Réponse :

json
Copier le code
{ "id": 1, "firstName": "John", "lastName": "Doe", "role": "admin" }
3. Ajouter un nouvel utilisateur
Requête : POST http://localhost:3000/users

Corps de la requête :

json
Copier le code
{
  "firstName": "Emily",
  "lastName": "Clark",
  "role": "user"
}
Réponse :

json
Copier le code
{
  "id": 6,
  "firstName": "Emily",
  "lastName": "Clark",
  "role": "user"
}
4. Mettre à jour un utilisateur
Requête : PUT http://localhost:3000/users/6

Corps de la requête :

json
Copier le code
{
  "role": "admin"
}
Réponse :

json
Copier le code
{
  "msg": "Utilisateur mis à jour",
  "user": {
    "id": 6,
    "firstName": "Emily",
    "lastName": "Clark",
    "role": "admin"
  }
}
5. Supprimer un utilisateur
Requête : DELETE http://localhost:3000/users/6

Réponse :

json
Copier le code
{ "msg": "Utilisateur supprimé" }
Notes Importantes
Données en Mémoire : Les données sont stockées en mémoire dans le tableau users. Cela signifie que chaque fois que vous redémarrez le serveur, les données reviennent à leur état initial.

Validation des Données : Assurez-vous que les champs firstName, lastName et role sont fournis lors de la création d'un nouvel utilisateur. Si l'un de ces champs est manquant, le serveur renverra une erreur 400 avec un message approprié.

Gestion des Erreurs : Le code gère les cas où un utilisateur n'est pas trouvé en renvoyant une erreur 404 avec un message d'erreur.

Mise à Jour de votre Dépôt GitHub
N'oubliez pas de committer vos modifications et de pousser votre code vers votre dépôt GitHub.

bash
Copier le code
git add .
git commit -m "Finalisation de l'API REST sans SQLite3"
git push
Tester l'API avec Postman
Pour tester les différentes routes de l'API, vous pouvez utiliser Postman ou un autre outil similaire :

GET /users

Description : Récupère la liste de tous les utilisateurs.
Requête : GET http://localhost:3000/users
GET /users/:id

Description : Récupère un utilisateur spécifique par son ID.
Requête : GET http://localhost:3000/users/1
POST /users

Description : Ajoute un nouvel utilisateur.

Requête : POST http://localhost:3000/users

Corps de la requête (JSON) :

json
Copier le code
{
  "firstName": "Emily",
  "lastName": "Clark",
  "role": "user"
}
PUT /users/:id

Description : Met à jour les informations d'un utilisateur existant.

Requête : PUT http://localhost:3000/users/6

Corps de la requête (JSON) :

json
Copier le code
{
  "role": "admin"
}
DELETE /users/:id

Description : Supprime un utilisateur.
Requête : DELETE http://localhost:3000/users/6
Exemples de Requêtes avec cURL
Vous pouvez également utiliser cURL pour tester les routes depuis le terminal :

1. GET tous les utilisateurs
bash
Copier le code
curl -X GET http://localhost:3000/users
2. GET un utilisateur par ID
bash
Copier le code
curl -X GET http://localhost:3000/users/1
3. POST ajouter un nouvel utilisateur
bash
Copier le code
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Emily",
    "lastName": "Clark",
    "role": "user"
  }'
4. PUT mettre à jour un utilisateur
bash
Copier le code
curl -X PUT http://localhost:3000/users/6 \
  -H "Content-Type: application/json" \
  -d '{
    "role": "admin"
  }'
5. DELETE supprimer un utilisateur
bash
Copier le code
curl -X DELETE http://localhost:3000/users/6
Conclusion
Cette API REST simple vous permet de comprendre les bases de la création d'une API avec Node.js et Express. Les données sont stockées en mémoire, ce qui est idéal pour les tests et l'apprentissage. N'hésitez pas à explorer le code, à ajouter des fonctionnalités ou à intégrer une base de données pour rendre les données persistantes.