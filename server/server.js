// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const messages = [
  'Primo messaggio dal server!',
  'Secondo messaggio: ciao!',
  'Terzo messaggio in arrivo!',
  'Ancora un messaggio!',
];
let index = 0;

app.get('/api/message', (req, res) => {
  const message = messages[index];
  index = (index + 1) % messages.length;
  res.json({ message });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
