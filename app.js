const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello ananda dimmas budiarto spd mpd updated 6');
});

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is running at http://localhost:${port}`);
});

