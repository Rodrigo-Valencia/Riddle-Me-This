const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const questions = [ 
   { id: 1, name: 'riddle1'},
   { id: 2, name: 'riddle2'},
   { id: 3, name: 'riddle3'},
];

app.get('/', (req, res) => {
    res.send('Get Started');
});

app.get('/api/riddles', (req, res) => {
    res.send([1,2,3]);
});

app.post('/api/riddles', (req, res) => {
    const schema = {
        name: Joi.string().min(3).require()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    
    if (!req.body.name || req.body.name.length < 3) {
        //400 bad request
        res.status(400).send('Answer is require to continue.');
        return;
    }
    const question = {
        id: question.length + 1,
        name: req.body.name
    };

questions.push(question);
res.send(question);

});

//PORT
const port = process.env.PORT || 5500;

app.listen(5500, () => console.log('Listening on port ${port}...'))