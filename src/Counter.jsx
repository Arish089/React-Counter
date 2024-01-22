import { useState } from "react";

function Counter(){
const [count,setCount] = useState(1);

    return(
    <div id="screen">
    <h1>Count : {count}</h1>
    <div className="inp">
    <button onClick={()=>{
        setCount(count + 1)
    }}>Increase</button>
    <button onClick={()=>{
        setCount(count - 1);
    }}>Decrease</button>
    </div></div>
)
}
export default Counter;

//http://localhost:5173/