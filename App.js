// new react App.js


import React from 'react';
 


const App = () => {
  const clicky = ()=>{
    alert("Hello World");
  }
   return (
    <>
<h1 style={{color:"yellow"}}>Hello World</h1>
<p>It's great to be here!</p>
<button onClick={clicky}>Click Here</button>
  </>
   );
};

export default App;




