import { useState } from "react";

function Massage1() {
    const[massages,setMassage]=useState("welcome")


    const changeMassage =()=>{
        setMassage("thank you")
    }


    return (
    <>
    <h1>{massages}</h1>
    <button onClick={changeMassage}>click here</button>
    </>
    )



}
export default Massage1;