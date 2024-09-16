const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/process', async (req, res) => {
  try {
    const { message } = req.body;
    console.log('Received message:', message);

    // Send the message to Server 2
    const response = await axios.post('http://server2:3001/process', { message });
    
    console.log('Response from Server 2:', response.data);
    res.json({ result: response.data.result });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server 1 listening at http://localhost:${port}`);
});