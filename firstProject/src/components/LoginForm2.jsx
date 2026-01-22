import { useState } from "react";

function LogInForm2() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted");
    alert(`Username: ${formData.username}, Password: ${formData.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter User Name</label>
      <input
        type="text"
        name="username"
        placeholder="Enter Name"
        value={formData.username}
        onChange={handleChange}
      />

      <br />

      <label>Enter Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LogInForm2;
