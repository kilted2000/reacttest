const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');


const app = express();



app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
);




app.listen(3000, () => {
    console.log('App listening on port 3000!');
    }   
);