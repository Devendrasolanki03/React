import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState(["Apple ", "Mango"]);
  const [fruitName, setFruitName] = useState("");

  //01 const addFruits = () => {
  //   setFruits([...fruits, "mango"]);
  // };'

  const addFruits = () => {
    if (fruitName.trim() != "") {
      setFruits([...fruits, fruitName]);
      setFruitName("");
    }
  };
  return (
    <>
      {/* <ul>
        {fruits.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
        <button onClick={addFruits}>add fruits</button>
      </ul> */}

      <h1>Add fruitName</h1>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter Fruits name"
      />
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
