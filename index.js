// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Données en mémoire
const users = [
  { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
  { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
  { id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
  { id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
  { id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
];

// GET : Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

// GET : Récupérer un utilisateur par ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ msg: 'Utilisateur non trouvé' });
  res.json(user);
});

// POST : Créer un nouvel utilisateur
app.post('/users', (req, res) => {
  const { firstName, lastName, role } = req.body;
  if (!firstName || !lastName || !role) {
    return res.status(400).json({ msg: 'Tous les champs sont requis' });
  }
  const lastId = users.length > 0 ? users[users.length - 1].id : 0;
  const newId = lastId + 1;
  const newUser = { id: newId, firstName, lastName, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT : Mettre à jour un utilisateur
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName, role } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ msg: 'Utilisateur non trouvé' });

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (role) user.role = role;

  res.json({ msg: 'Utilisateur mis à jour', user });
});

// DELETE : Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ msg: 'Utilisateur non trouvé' });

  users.splice(index, 1);
  res.json({ msg: 'Utilisateur supprimé' });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
