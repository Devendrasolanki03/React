import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // //01 //return <h1>hello</h1>; // it only returns one element if you want to return multiple elements you have to wrap them in a div or a fragment

  // // 02 return ( // wrapping in a div
  // //     <div>
  // //       <h1>hello world</h1>

  // //     </div>
  // //   );

  // 3  return ( // Fragment syntax
  //   <>
  //     <h1>Hello World</h1>
  //   </>
  // )

  // // return (
  // //   //  React.createElement(h1, null, "Hello World"); // using React.createElement method but this is not common in React

  // //   React.createElement(h1, null, "Hello World")
  // // ); // using React.createElement method but this is not common in React

  return (
    <>
      <h1 >Hello World</h1>
    </>
  );
}

export default App;
