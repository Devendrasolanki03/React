import { useState } from "react";

function Conter1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </>
  );
}

export default Conter1;
