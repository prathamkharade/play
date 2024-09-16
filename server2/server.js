const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/process', (req, res) => {
  const { message } = req.body;
  console.log('Received message from Server 1:', message);

  // Process the message (in this case, just reverse it)
  const processedMessage = message.split('').reverse().join('');

  console.log('Processed message:', processedMessage);
  res.json({ result: processedMessage });
});

app.listen(port, () => {
  console.log(`Server 2 listening at http://localhost:${port}`);
});