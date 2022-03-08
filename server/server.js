const express = require('express');
const app = express();
const cors = require('cors');

// Working solution -> Replace URL with your FrontEnd url
// app.use(cors({ origin: 'http://127.0.0.1:5500' })); // allow specific domain
// app.use(cors({ origin: '*' })); // allow all domains
// app.use(
//   cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// ); // allow limited HTTP requests

// Server code

app.get('/', (req, res) => {
  res.send({ name: 'Rahul', age: 27 });
});

// Endpoint that allows multiple origins
app.get('/multiple', (req, res) => {
  const corsWhitelist = ['http://127.0.0.1:5500', 'http://localhost:5500'];

  // Recommended approach is to check current request origin, and if it matches whitelisted domains, then pass only that origin.
  if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
  }

  res.send([
    { name: 'Rahul', age: 27 },
    { name: 'Other', age: 23 },
  ]);
});

app.listen(3000);
