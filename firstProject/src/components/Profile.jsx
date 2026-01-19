import { useState } from "react";

function Profile(){

    const [name , setName] = useState("dev");
      const [address, setAddress] = useState("Indore");


return (
    <>
    <h1>name is{name}</h1>
    <h2>addres is {address}</h2>
    </>
)


}
export default Profile;