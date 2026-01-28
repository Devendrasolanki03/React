import { useEffect, useState } from "react";

function UserEffect1() {
    // example 1: Basic useEffect 
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Component mounted");
    // },); // Empty dependency array means this runs once on mount
    // // if we use [] array it will run only once when component is mounted

    // return (
    //     <div>
    //         <h2>Welcome to UseEffect1 Component</h2>
    //         <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    //     </div>
    // );



    // // Example 2: useEffect with dependency  
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Component mounted or count changed");

    // }, [count]); // Dependency array means this runs when count changes
    // return (
    //     <div>
    //         <h2>Welcome to UseEffect1 Component</h2>
    //         <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    //     </div>
    // );


    // Example 3: useEffect with two states 
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("");

    // useEffect(() => {
    //     console.log("Component mounted or count changed");
    // }, [count]); // Dependency array means this runs when count changes

    // useEffect(() => {
    //     console.log("Name changed");
    // }, [name]); // Dependency array means this runs when name changes

    // return (
    //     <div>
    //         <h2>Welcome to UseEffect1 Component</h2>
    //         <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    //         <br />
    //         <input
    //             type="text"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="Enter your name"
    //         />
    //     </div>
    // );

    // Example 4: useEffect with cleanup 




}
export default UserEffect1;