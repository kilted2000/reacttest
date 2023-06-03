const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');


const app = express();



app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
);

const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = 'live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc'

app.get('/', (req, res) => {
    // const DOG_API_URL = "https://api.thedogapi.com/";
    // const DOG_API_KEY = 'live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc'
  
    axios.get(DOG_API_URL, {
      headers: {
        'x-api-key': DOG_API_KEY
      }
    })
      .then(response => {
        // Process the response from the Dog API
        res.send(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error occurred while fetching data from Dog API');
      });
  });

app.listen(3000, () => {
    console.log('App listening on port 3000!');
    }   
);