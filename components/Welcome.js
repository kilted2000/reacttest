//import React from 'react';
import { useState } from 'react';  
import React, { useEffect } from 'react';

import axios from 'axios';

const Welcome = () =>{
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
      const fetchDogs = async () => {
        try {
          const response = await axios.get('https://api.thedogapi.com/v1/images/search?api_key=live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc&breeds=breeds_id&limit=12&images/', {
            headers: {
              'x-api-key': 'live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc' 
            }
        });
          setDogs(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchDogs();
    }, []);
    const [name, setName] = React.useState('');
    
    const clicky = ()=>{
    alert("Ciamar a tha sibh fein?");
  }
  return(
<>
<div style={{ height: '500px', width:'400px',margin:'auto',backgroundColor: "#321E1E", padding:'10px'}}>
<h1 style={{color:"#CD1818"}}>Hello World</h1>
<p>Hello</p>
<p>It's great to be here!</p>
<button className="btn btn-outline-light" onClick={clicky}>Click Here</button>
<form style={{marginTop:'20px'}}>
    Name: <input type="text" name="name" placeholder='Your Name Here' />
</form>
{ <ul style={{backgroundColor: 'white'}}>
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul> }
</div>
</>
    );
    };


export default Welcome;