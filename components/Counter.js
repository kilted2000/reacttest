
import React, { useState } from "react"; 

const Counter = React.memo(() =>{
    const [count, setCount] = useState(0);
    
    const add = () =>{
        setCount(count + 1); 
    };
    const reset = () =>{
        setCount();  
    };
    return(
        <>
        <div id="counting" style={{ height: '250px', width:'400px',margin:'auto', padding:'10px'}}>
       <h1>Counter</h1>
       <form>
       <button className="btn btn-outline-dark" name="count" onClick={add}>Click To Add</button>
       <div id="count">{count}</div>
       <input id="reset" type="button" value="Reset" onClick={reset} />
       </form>
       </div>
        </>
    );
})





export default Counter;