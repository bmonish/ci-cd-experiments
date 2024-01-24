const express = require('express');

const app = express();

app.use(express.json());

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server Started on Port 3000'));
