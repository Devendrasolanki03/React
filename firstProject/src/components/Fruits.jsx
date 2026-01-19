import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState(["Apple ", "Mango"]);
  const addFruits = () => {
    setFruits([...fruits, "mango"]);
  };
  return (
    <>
      <ul>
        {fruits.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
        <button onClick={addFruits}>add fruits</button>
      </ul>
    </>
  );
}
export default Fruits;
