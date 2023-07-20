const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/loginapi', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        const token = 'admin123';
        res.send(token);
    } else {
        res.status(401).send({
            message: 'Invalid credentials'
        });
    }

    });

app.listen(9002, () => {
    console.log(`Server is running on port 9002.`);
  });