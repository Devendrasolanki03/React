import { useState } from "react";

function Counter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  //02
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((pervCount) => pervCount + 1);
    }
  };

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(initialCount)}>Reset</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* //02 */}

      <button onClick={IncrementFive}>Increment5</button>
    </>
  );
}
export default Counter2;
