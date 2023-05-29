const express = require('express');
const bodyParser = require('body-parser');
//create a new react app

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(__dirname + '/index.html');
    }
);




app.listen(3000, () => {
    console.log('App listening on port 3000!');
    }   
);