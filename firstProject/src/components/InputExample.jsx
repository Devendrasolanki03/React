import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>my name is :{name}</h1>
    </>
  );
}
export default InputExample;
