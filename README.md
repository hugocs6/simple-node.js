# simple-node.js


# **Guide pour Créer une Simple API REST avec Node.js**

Une API REST (Representational State Transfer) est une manière standardisée de permettre la communication entre différents systèmes à travers le protocole HTTP. Dans ce guide, nous allons apprendre à créer une API REST basique à l'aide de Node.js et du framework Express. Nous partirons de zéro et ajouterons des routes pour effectuer des opérations CRUD (Create, Read, Update, Delete). 

## **Prérequis**

- Node.js et npm installés sur votre machine.
- Un éditeur de texte comme Visual Studio Code.

## Étape 1 : Créer le Projet

- **Ouvrez le terminal** et accédez à un répertoire où vous souhaitez créer le projet.
- Initialisez un nouveau projet Node.js :Cela créera un fichier `package.json` avec des réglages par défaut.
    
    ```bash
    npm init -y
    ```
    

### **Quelques tests**

- créer un nouveau fichier appelé `index.js`. Ajoutez cette ligne de code

```jsx
console.log("test from node");
```

- pour exécuter ce code vous pouvez taper sur votre terminal `node index.js`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/03c27908-a904-4f40-b467-146f7e277b48/image.png)

vous pouvez essayer pour le plaisir

```jsx
console.log("test from node", Math.random(), new Date())
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/82fac3c2-c38a-447a-adb0-827e99c88848/image.png)

## **GITHUB**

C'est le bon moment pour créer un dépôt github

- Accédez à [github.com](http://github.com/) et créez un dépôt

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/817a2588-85c5-490a-8258-bb4ce384c7ed/image.png)

suivez les instructions pour ajouter un fichier readme et connecter votre dépôt local au dépôt distant

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/af71f29c-c932-40a7-ba9b-d828dca109d1/image.png)

une fois ajouté, vous allez voir vos fichiers et ajouter une belle description à votre fichier readme et **commit régulièrement**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/cbeaff43-788f-43d8-8ecc-b70f87c2a0c6/image.png)

```bash
git add .
git commit -m "mon message"
git push
```

## Étape 2 : Installer les Dépendances

1. Installez Express (le framework web pour Node.js) et Nodemon (pour recharger automatiquement le serveur à chaque modification) :
    
    ```bash
    npm install express
    npm install --save-dev nodemon
    ```
    
2. Dans le fichier `package.json`, modifiez le champ `"scripts"` pour inclure le script de démarrage avec Nodemon :
    
    ```json
    "scripts": {
      "start": "nodemon index.js"
    }
    ```
    

votre package.json ressemblera à ceci :

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/6f0e026a-b2f1-4f20-a1c9-c4c0ab46c3a6/image.png)

maintenant si vous exécutez sur votre terminal `npm start`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/3be5ae10-9300-4ac0-a79e-7cf7c129398c/image.png)

la dépendance appelée "nodemon" détectera tout changement et redémarrera automatiquement votre serveur

- IMPORTANT : ajoutez un fichier .gitignore et ajoutez-y node_modules

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/379ea9f0-6c7d-42d0-bb11-a3ecbc7be042/image.png)

Commit sur GitHub

```bash
git add .
git commit -m "dependencies: express et nodemon"
git push
```

## Étape 3 : Créer le Serveur de Base

- Ouvrez `index.js` et collez le code suivant pour créer un serveur de base :

```bash
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Bienvenue sur notre API REST simple!');
});

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
```

votre console devrait afficher ceci:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/b4dfac33-cf3c-41ea-998f-be2dd7160ffa/image.png)

si vous allez sur "http://localhost:3000/" vous verrez ceci

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/06f27fb6-ab4e-4c77-86e1-5443a40f794d/image.png)

🎊✨ Félicitations, vous avez créé un serveur simple en utilisant nodeJs 🎉

- nous allons modifier la réponse. Cette fois, nous enverrons des données json

```jsx
app.get("/", (req, res) => {
    res.json({
        msg: "hello from API"
    })
})
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/83f24c86-b1ce-4cbf-9b22-fb8e41a8d0bb/image.png)

Vous pouvez même tester cela avec POSTMAN

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/2a994863-026a-46ff-9d74-d5bed41740d3/image.png)

- nous devons créer un “endpoint” (point d'entrée) pour gérer les demandes de post

```
app.post("/", (req, res) => {
	res.json({
		msg: "ici le post !!!",
	})
})
```

sur POSTMAN.  La méthode doit être POST

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/ee6b11ac-a1d7-44e8-b63a-7f027ab1645b/image.png)

## Methods pour CRUD (Create, Read, Update, Delete)

**GET** : Récupérer les éléments
**POST** : Ajouter un élément.  Il a besoin d'un corps (body)
**PUT** : Mettre à jour un élément.  Il a besoin d'un corps (body)
**DELETE** : Supprimer un élément. Basé sur les paramètres

### Nous devons gérer 4 méthodes qui peuvent arriver sur notre serveur : GET, POST, PUT, DELETE. Pour cela, nous allons générer chaque méthode une à la fois.

**GET**: ici, nous envoyons toutes les données requises

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/747b2a50-78ea-4eac-8b93-e0b74b934e35/image.png)

si nous effectuons une requête GET en utilisant POST vers 'http://localhost:3000/

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/be56d856-c0e4-457d-832c-25346d7525a1/image.png)

### **POST: ici, nous gérons les requêtes POST, et nous allons également avoir besoin des données dans le 'body'**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/4226b160-7e94-4965-b4c1-40aa93b874bc/image.png)

- nous devons récupérer les données du “body”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/b360af36-a10e-4351-b518-d9161e131960/a3c2bc8a-a797-455b-916f-bae4406646f2.png)

nous testons sur Postman

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/0c7e074a-2d1c-43d1-9aa2-b33154607b85/image.png)

### **PUT: nous allons modifier un utilisateur en fonction de son ID passé en paramètre dans l'URL**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/8d5bdd8f-0818-4c29-9d5b-a58a4213a996/image.png)

## Pour accéder au paramètre passé dans l'URL, vous devez ajouter ceci à votre code `:id ❗`

example: “http://localhost:3000/:id”

```jsx
app.post("/:id", (req, res) => { //Cela signifie que j'accepte un paramètre appelé 'id'
/// etc
})
```

Test sur POSTMAN

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/430089e4-dc49-4537-a990-b1ab03e5274b/image.png)

### **DELETE: nous supprimons un utilisateur en fonction de son ID**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/164acf2e-5d10-4bc2-a8fc-39b75732b4a2/image.png)

POSTMAN test

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/69dce357-3aba-41d3-a096-35a6300dd1af/image.png)

## **Ajout de données en MÉMOIRE (pas encore de base de données)**

- créons une liste d'éléments (utilisateurs)

```jsx
const users = [
	{ id: 1, firstName: 'John', lastName: 'Doe', role: 'admin' },
	{ id: 2, firstName: 'Jane', lastName: 'Smith', role: 'user' },
	{ id: 3, firstName: 'Alice', lastName: 'Johnson', role: 'moderator' },
	{ id: 4, firstName: 'Bob', lastName: 'Brown', role: 'user' },
	{ id: 5, firstName: 'Charlie', lastName: 'Davis', role: 'admin' }
];
```

maintenant, nous envoyons tous ces utilisateurs enregistrés dans la variable 'users' dans la réponse du serveur

```jsx
const users = [
	{ id: 1, firstName: "John", lastName: "Doe", role: "admin" },
	{ id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
	{ id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
	{ id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
	{ id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]

// GET : LIRE tous les utilisateurs
app.get("/", (req, res) => {
	res.json(users)
})
```

si nous testons sur Postman

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/a43067a4-25b7-4ef5-acb4-43209d6dfdd5/image.png)

nous 'lisons' **(READ)** tous ****les utilisateurs et envoyons les données en format JSON dans la réponse de l'API

## WRITE: ajout d'un nouvel utilisateur

Pour ajouter un nouvel utilisateur, nous allons utiliser la méthode POST et nous devons extraire les données du 'body' de la requête.

Sur POSTMAN on click sur “body”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/455a91a2-8a5d-4f67-a8fd-0922540a9327/image.png)

maintenant, nous pouvons ajouter des données au format JSON

```bash
{
	"prenom": "Prenom test",
	"age": 24
}
```

Vous pouvez passer des paires de valeurs en utilisant toujours des guillemets doubles pour le nom de la propriété, et vous pouvez passer des chaînes de caractères, des booléens, des nombres, des objets, des tableaux…

### Récupérer les données du body

nous utilisons req.body

```jsx
app.post("/", (req, res) => {
    console.log(req.body);
    
	res.json({
		msg: "ici le post !!!",
	})
})
```

sur la console

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/c9b12cd4-190b-4101-b593-54c30a56a8d2/image.png)

nous avons les données qui arrivent au serveur

- nous envoyons plus de données nas le “body” sur postman

```
{
    "firstName": "user one",
    "lastName": "last name test",
    "role": "admin test"
}
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/4d2e9ded-1a95-4b1b-9189-06a32813465b/image.png)

- nous pouvons extraire les différentes propriétés de l'objet utilisateur qui arrive dans le corps

```jsx
const { firstName, lastName, role } = req.body
```

et nous renvoyons les données afin de confirmer

```jsx
// créer un nouvel utilisateur
app.post("/", (req, res) => {
	const { firstName, lastName, role } = req.body

	const newUser = {
		firstName,
		lastName,
		role,
	}

	res.json(newUser)
})
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/4c599762-fe83-4252-867f-873d3abec8c9/image.png)

### POST: Ajouter un Nouvel Utilisateur

Ajouter un nouvel utilisateur est facile, nous devons utiliser la méthode "push". mais avant cela, récupérons l'identifiant du dernier utilisateur

obtenir l'identifiant du dernier utilisateur 

`const lastUserId = users[users.length - 1].id`

```jsx
// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
app.post("/", (req, res) => {
	// récupérer toutes les données qui arrivent dans le corps de la requête (body)
	const { firstName, lastName } = req.body

	// récupérer l'ID du dernier utilisateur en fonction du nombre d'utilisateurs dans notre variable de tableau 'users'.
	const lastId = users[users.length - 1].id
	// ajouter un pour créer un utilisateur unique
	const newId = lastId + 1

	// créer le nouvel utilisateur avec les données du corps de la requête et l'ID calculé
	const newUser = {
		firstName,
		lastName,
		id: newId,
	}

	// ajouter le nouvel utilisateur à notre liste d'utilisateurs en utilisant la méthode 'push'
	users.push(newUser)
	// envoyer le code de statut 201 (créé) et les données du nouvel utilisateur afin de confirmer au client.
	res.status(201).json(newUser)
})
```

Le code d'état d'un élément créé est **201**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/549de0ce-e10a-4f5e-97cc-3b30ee32b14e/image.png)

N'oubliez pas d'ajouter tout dans votre dépôt GitHub

```bash
git add .
git commit -m "mon message"
git push
```

### PUT: Modifier un utilisateur en fonction de son ID

Nous allons récupérer toutes les données du corps de la requête. Ce sont les données que nous allons utiliser pour modifier notre utilisateur.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/6d5e0e64-0c2c-4ce1-ad83-2d70f1f4cf02/image.png)

```jsx
// récupérer toutes les données qui arrivent dans le corps de la requête (body)
	const { firstName, lastName } = req.body
```

C'est la même chose que ce que nous avons fait lors de la création de l'utilisateur dans la requête POST.

Maintenant, nous devons récupérer l'ID à partir de l'URL. Ici, nous récupérons le paramètre depuis la requête.

```jsx
const id = parseInt(req.params.id)
```

Notez que nous devons fair un numero `parseInt()` de la variable 'id' car elle est transmise sous forme de chaîne de caractères.

Nous essayons de trouver l'utilisateur en fonction de son identifiant (id)

```jsx
// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)
```

La variable 'userIndex' renverra -1 si aucun utilisateur n'est trouvé, ou un nombre positif correspondant à sa position si l'utilisateur est trouvé dans notre liste d'utilisateurs.

Donc, si 'userIndex' est inférieur à 0, nous enverrons une erreur 404 et un message indiquant que nous n'avons pas trouvé l'utilisateur.

```jsx
	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
```

Si l'utilisateur est trouvé, nous vérifierons quelles informations ont été envoyées afin de mettre à jour notre utilisateur en conséquence

```jsx
// si el est trouvé, nous vérifions quelles valeurs ont été envoyées
	const { firstName, lastName } = req.body

	if (firstName) users[userIndex].firstName = firstName
	if (lastName) users[userIndex].lastName = lastName
```

Ensuite, nous envoyons un message indiquant que nous avons mis à jour l'utilisateur

```jsx
res.json({
		msg: "utilisateur mis à jour",
		user: users[userIndex],
	})
```

Si vous essayez cela sur POSTMAN, vous pourrez voir la mise à jour des données envoyées dans le corps de la requête et leur renvoi dans la réponse

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/bb45a387-bc57-4c1d-b275-d2941edf5cb5/image.png)

D'un autre côté, si vous essayez d'envoyer un identifiant utilisateur qui n'est pas trouvé dans notre tableau, une erreur 404 sera renvoyée

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/aeaa2ac3-5d4c-4ea5-9800-70811d21593f/image.png)

### **DELETE: Supprimer un utilisateur**

Nous allons récupérer l'identifiant de l'utilisateur à partir des paramètres envoyés dans l'URL, tout comme nous l'avons fait avec la méthode POST.

```jsx
const id = parseInt(req.params.id)
```

Et nous essayons de le retrouver à nouveau…

```jsx
	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
```

Si l'utilisateur avec cet identifiant n'existe pas, nous envoyons une erreur 404... vous connaissez déjà cela.

Maintenant, si nous trouvons l'utilisateur, nous le retirons du tableau des utilisateurs. Et pour cela, nous utilisons la méthode JavaScript 'splice'.

```jsx
// si el est trouvé
	users.splice(userIndex, 1)

	res.json({
		msg: "utilisateur suprimée",
	})
```

Après cela, nous envoyons un message de confirmation au client: "utilisateur suprimée"

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/e303cd2e-70d5-4a21-bac1-738158d83e7e/image.png)

Si nous essayons de renvoyer la méthode DELETE avec le même identifiant utilisateur, nous devrions obtenir une erreur 404, car nous venons de le supprimer !

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/69a83672-56ae-4974-9347-846f810a76b5/image.png)

### **GET: Un seul utilisateur**

Nous allons afficher un utilisateur en fonction de son identifiant, passé dans les paramètres, comme nous l'avons fait pour les méthodes PUT et DELETE. Cette fois, nous essayons de trouver l'utilisateur, puis nous le renvoyons au client

```jsx
const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
```

Jusqu'ici, c'est la même chose, mais ensuite, nous envoyons l'utilisateur avec l'identifiant correct

```jsx
// si el est trouvé

	res.json(users[userIndex])
```

Si nous essayons cela sur POSTMAN …

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/8b392f69-3794-432c-b476-c742ce598845/image.png)

Nous voyons le même utilisateur avec cet identifiant

Si nous envoyons un identifiant qui n'est pas trouvé dans notre tableau d'utilisateurs, alors nous obtenons une erreur 404 (Non trouvé).

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/845a2672-3db0-4650-b446-21c42fe53141/ee1efa36-3abc-4d64-ad3c-d5e475921718/image.png)

CONCLUSION:

Nous avons créé un serveur en utilisant Express.  Ceci est une API simple créés en Node.js. Les utilisateurs sont stockés en mémoire, ce qui signifie que les données ne sont pas persistantes et seront réinitialisées à chaque redémarrage du serveur. L'API permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les utilisateurs. Les différentes routes permettent d'ajouter, de récupérer, de mettre à jour et de supprimer des utilisateurs en utilisant les méthodes HTTP correspondantes (POST, GET, PUT, DELETE). Ce projet est idéal pour comprendre les bases de la création d'une API REST avec Node.js et Express.

Plus tard, nous allons rendre les données persistantes en utilisant SQLite3, une petite base de données SQL

[Projet 3 | NodeJs API Rest (Partie 2) Route des Utilisateurs et SQLite3](https://www.notion.so/Projet-3-NodeJs-API-Rest-Partie-2-Route-des-Utilisateurs-et-SQLite3-128b87ff4fc180efbfd7e5a8a9b13b7b?pvs=21)