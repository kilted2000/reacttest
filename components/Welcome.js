//import React from 'react';
import { useState } from 'react';  
import React, { useEffect } from 'react';

import axios from 'axios';

const Welcome = () =>{
    const [name, setName] = React.useState('')
    const handleChange = (event) => { event.preventDefault();
      setName(event.target.value)
      
    }
    const clicky = ()=>{
    alert("Ciamar a tha sibh fhein?");
  }
  return(
<>
<div style={{ height: '300px', width:'400px',margin:'auto',backgroundColor: "#321E1E", padding:'10px'}}>
<h1 style={{color:"#CD1818"}}>Hello World</h1>
<p>Hello</p>
<p>It's great to be here!</p>
<button className="btn btn-outline-light" onClick={clicky}>Click Here</button>
<form style={{marginTop:'20px'}}>
    <label htmlFor='name'>Name: </label> 
    <input type="text" name="name" value={name}  />
    <button style={{marginLeft: "7px"}} value="Submit" name='name' onClick={handleChange} id='name' className="btn btn-outline-light" >Submit</button>
    {name ? <strong>Hello {name}</strong> : 'Please type your name'}
</form>
{/* { <ul style={{backgroundColor: 'white'}}>
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul> } */}
</div>
</>
    );
    };


export default Welcome;