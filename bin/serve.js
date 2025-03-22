const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.get('/', (req, res) => {
  console.log(`request: ${req.url}`)
  res.status(200).send('Hello World');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
