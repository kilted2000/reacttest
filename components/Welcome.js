import React from 'react';
import { useState } from 'react';   
import axios from 'axios';

const Welcome = () =>{
    // const [dogs, setDogs] = useState([]);

    // useEffect(() => {
    //   const fetchDogs = async () => {
    //     try {
    //       const response = await axios.get(`${"https://web.postman.co/workspace/My-Workspace~ba7f01fc-af38-4507-885a-4e5bee91c6be/request/23992057-f492b7e2-be04-4b41-9042-82d0d3b18792"}v1/breeds`, {
    //         headers: {
    //           'x-api-key: live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc' // Replace with your API key
    //         }
    //     });
    //       setDogs(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchDogs();
    // }, []);
    const [name, setName] = React.useState('');
    
    const clicky = ()=>{
    alert("Cait a bheil thu?");
  }
  return(
<>
<div style={{ height: '500px', width:'400px',margin:'auto',backgroundColor: "blue", padding:'10px'}}>
<h1 style={{color:"yellow"}}>Hello World</h1>
<p>It's great to be here!</p>
<button className="btn btn-outline-dark" onClick={clicky}>Click Here</button>
<form style={{marginTop:'20px'}}>
    Name: <input type="text" name="name" placeholder='Your Name Here' />
</form>
{/* <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul> */}
</div>
</>
    );
    };

//live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc
//Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_dBaZf3vQw31302AszpfI20tCqQwf9qXg1ha5X0gpNYc1geh8XPIfak2NGLFc1tDc'
export default Welcome;