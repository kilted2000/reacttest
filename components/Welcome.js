import React from 'react';


const Welcome = () =>{
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
    input: <input type="text" name="name" />
</form>
</div>
</>
    );
    };


export default Welcome;