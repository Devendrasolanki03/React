import { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "dev", age: 20, address: "indore" });
  return (
    <>
      <h2>Name :{user.name}</h2>
      <h2>Age : {user.age}</h2>
      <h2>Address : {user.address}</h2>

      <button onClick={() => setUser({ ...user, address: "dewas" })}>
        addres update
      </button>
      <button onClick={() => setUser({ ...user, age: 10 })}>update Age</button>
    </>
  );
}

export default User;
