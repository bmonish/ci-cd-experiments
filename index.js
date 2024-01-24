const express = require('express');

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json('Server Running');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server Started on Port 3000'));
