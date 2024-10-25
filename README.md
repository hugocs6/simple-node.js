# Guide d'Utilisation de l'API REST Node.js

Cette **API REST** permet de gérer une liste d'utilisateurs en mémoire en utilisant **Node.js** et **Express**. Elle supporte les opérations CRUD (Create, Read, Update, Delete) sur les utilisateurs.

---

## Prérequis

- **Node.js** et **npm** installés sur votre machine.
- Un outil comme **Postman** pour tester les requêtes HTTP.

---

## Installation

1. **Cloner le dépôt**

    ```bash
    git clone [https://github.com/hugocs6/simple-node.js]
    ```

2. **Installer les dépendances**

    ```bash
    cd
    npm install
    ```

---

## Lancer le Serveur

Pour démarrer le serveur, exécutez la commande suivante :

```bash
node app.js
```

Le serveur écoute par défaut sur le port `3000`. Vous pouvez vérifier cela en accédant à `http://localhost:3000` dans votre navigateur ou via un outil comme **Postman**.

---

## Points de terminaison (Endpoints)

### Créer un Utilisateur

- **Méthode** : `POST`
- **URL** : `/users`
- **Corps de la requête** :

    ```json
    {
        "name": "Nom de l'utilisateur",
        "email": "email@exemple.com"
    }
    ```

### Lire les Utilisateurs

- **Méthode** : `GET`
- **URL** : `/users`

### Mettre à Jour un Utilisateur

- **Méthode** : `PUT`
- **URL** : `/users/:id`
- **Corps de la requête** :

    ```json
    {
        "name": "Nom mis à jour",
        "email": "nouvel_email@exemple.com"
    }
    ```

### Supprimer un Utilisateur

- **Méthode** : `DELETE`
- **URL** : `/users/:id`

---

## Exemple d'Utilisation avec Postman

1. **Créer un nouvel utilisateur** : Utilisez une requête **POST** vers `/users` avec un JSON contenant le nom et l'email.
2. **Lire les utilisateurs existants** : Envoyez une requête **GET** vers `/users`.
3. **Mettre à jour un utilisateur** : Envoyez une requête **PUT** vers `/users/:id` avec le JSON mis à jour.
4. **Supprimer un utilisateur** : Envoyez une requête **DELETE** vers `/users/:id`.

---

## Conclusion

Cette API est une base pour la gestion d'une liste d'utilisateurs. Elle peut être étendue pour inclure des fonctionnalités plus avancées, telles que la gestion de la persistance des données avec une base de données.

---