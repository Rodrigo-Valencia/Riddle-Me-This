const express = require('express');
const app = express();

app.use(express.json());

const questions = [ 
   { id: 1, name: 'question1'},
   { id: 2, name: 'question2'},
   { id: 3, name: 'question3'},
];

app.get('/', (req, res) => {
    res.send('Get Started');
});

app.get('/api/riddles', (req, res) => {
    res.send([1,2,3]);
});

//PORT
const port = process.env.PORT || 5500;

app.listen(5500, () => console.log('Listening on port ${port}...'))