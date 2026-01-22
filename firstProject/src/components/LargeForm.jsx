import { useState } from "react";

function LargeForm() {
//   const [name, setNmae] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");
//   const [country, setCountry] = useState("");
//   const [boi, setBio] = useState("");
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e) => {
//     alert("form submitted");
//     e.preventDefault();
//     alert(
//       `Your details are : <n />
//       name : ${name} 
//       email :${email}<n />
//       password :${password} <n />
//       gender :${gender} <n />
//       age :${age} <n />
//       country :${country} <n />
//       bio :${boi} <n />
//       agree :${agree} `,
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         Name:{" "}
//         <input
//           type="text"
//           name=""
//           id=""
//           value={name}
//           onChange={(e) => setNmae(e.target.value)}
//         />
//       </div>
//       <br />
//       Email:
//       <input
//         type="text"
//         name=""
//         id=""
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <div>
//         Password:
//         <input
//           type="text"
//           name=""
//           id=""
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//       </div>
//       <div>
//         Gender : Male :
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           onChange={(e) => setGender(e.target.value)}
//           checked={gender === "male"}
//         />
//         Female :
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           onChange={(e) => setGender(e.target.value)}
//           checked={gender === "Female"}
//         />
//       </div>
//       <div>
//         <br />
//         Age:{" "}
//         <input
//           type="text"
//           name=""
//           id=""
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         Country:
//         <select value={country} onChange={(e) => setCountry(e.target.value)}>
//           <option value="">Select Country</option>
//           <option value="India">India</option>
//           <option value="USA">USA</option>
//           <option value="UK">UK</option>
//         </select>
//       </div>
//       <br />
//       <div>
//         Bio:
//         <textarea
//           value={boi}
//           onChange={(e) => setBio(e.target.value)}
//         ></textarea>
//       </div>
//       <div>
//         <input
//           type="checkbox"
//           name=""
//           id=""
//           checked={agree}
//           onChange={(e) => setAgree(e.target.checked)}
//         />
//         I agree to the terms and conditions
//       </div>
//       <button type="submit">submit</button>
//     </form>
//   );
// 

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  gender: "",
  age: "",
  country: "",
  bio: "",
  agree: false,
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};

const handleSubmit = (e) => {
    e.preventDefault();
  
    alert("Form submitted");
    alert(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}, Gender: ${formData.gender}, Age: ${formData.age}, Country: ${formData.country}, Bio: ${formData.bio}, Agree: ${formData.agree}`);

}

return (
  <form onSubmit={handleSubmit}>
    <div>
      Name:{" "}
      <input
        type="text"
        name="name"
        id=""
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <br />
    Email:
    <input
      type="text"
      name="email"
      id=""
      value={formData.email}
      onChange={handleChange}
    />
    <br />
    <div>
      Password:
      <input
        type="text"
        name="password"
        id=""
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      </div>
      <div>
        Gender : Male :
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={formData.gender === "male"}
        />
        Female :
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
          checked={formData.gender === "Female"}
        />
      </div>
      <br />
      <div>
        <br />
        Age:{" "}   
        <input type="number" name="age" id="" value={formData.age} onChange={handleChange} />
                
      </div>
      <br />
      <div>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        </select>
      </div>
      <br />
      <div>
        Bio:
        <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          name="agree"
          id=""
          
          checked={formData.agree}
          onChange={handleChange}
        />

        I agree to the terms and conditions
      </div>
      <button type="submit">submit</button>
    </form>
  );
  










}
export default LargeForm;
