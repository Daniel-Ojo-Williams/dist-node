const express = require('express');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8000;
const Recipe = require('./recipe.js');
const app = express();

app.get('/', async(req, res) => {
  return "Hello from Distributed Node.js"
})

app.get('/recipes/:id', async(req, res) => {
  const recipe = new Recipe(req.params.id)
  await recipe.hydrate();
  res.status(200).json({ data: recipe });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
});