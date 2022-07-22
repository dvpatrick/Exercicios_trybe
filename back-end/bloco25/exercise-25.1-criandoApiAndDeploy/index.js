const express = require('express');

const app = express();

const PORT = 3002;

app.get('/', (_req, res) => res.status(200).json({ message: 'Esta vivo!!!' }));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

