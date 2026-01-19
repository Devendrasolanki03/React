import { useState } from "react";

function Toggle(){


    const[isOn , setisOn] = useState(false)
    return(
        <>

        <h1>{isOn ? "ON" : "OFF"}</h1>
        <button onClick={()=>setisOn(!isOn)}> Toggle</button>
        </>
    )
}

export default Toggle;