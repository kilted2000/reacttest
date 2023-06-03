
import React, { useState } from "react"; 

const Counter = React.memo(() =>{
    const [count, setCount] = useState(0);
    
    const add = (e) =>{
        e.preventDefault();
        setCount(count + 5); 
    };
    const reset = () =>{
        setCount(0);  
    };
    return(
        <>
        <div id="counting" style={{ height: '250px', width:'400px',margin:'auto', padding:'10px'}}>
       <h1>Counter</h1>
       <form>
       <button className="btn btn-outline-dark" name="count" type="button" onClick={add}>Click To Add</button>
       <div id="count">{count}</div>
       <input id="reset" type="button" value="Reset" className="btn btn-dark" onClick={reset} />
       </form>
       </div>
        </>
    );
})





export default Counter;