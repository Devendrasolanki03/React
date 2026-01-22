import { useState } from "react";

function LargeForm() {
  const [name, setNmae] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [boi, setBio] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    alert("form submitted");
    e.preventDefault();
    alert(
      `Your details are : <n />
      name : ${name} 
      email :${email}<n />
      password :${password} <n />
      gender :${gender} <n />
      age :${age} <n />
      country :${country} <n />
      bio :${boi} <n />
      agree :${agree} `,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:{" "}
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setNmae(e.target.value)}
        />
      </div>
      <br />
      Email:
      <input
        type="text"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <div>
        Password:
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </div>
      <div>
        Gender : Male :
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male"}
        />
        Female :
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "Female"}
        />
      </div>
      <div>
        <br />
        Age:{" "}
        <input
          type="text"
          name=""
          id=""
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <br />
      <div>
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <br />
      <div>
        Bio:
        <textarea
          value={boi}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to the terms and conditions
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
export default LargeForm;
