import React from "react";
import "./App.css";

import Massage1 from "./components/Massage1";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Conter2";
import Toggle from "./components/Toggle";
import InputExample from "./components/InputExample";
import Profile from "./components/Profile";
import User from "./components/User";
import Fruits from "./components/Fruits";
import ArrayState from "./components/ArrayState";
import EmployeeState from "./components/EmployeeState";
import UserGreeting from "./components/UserGreeting";
import Form from "./components/Form";
import LogInForm from "./components/LogInForm";
import LargeForm from "./components/LargeForm";
import LogInForm2 from "./components/LoginForm2";
import Life3 from "./components/Life3";
import MassagesLife from "./components/MassagesLife";
import UserEffect1 from "./components/UseEffect1";


function App() {
  // const [massage, setMassage] = React.useState(true);
  return (
    <>
      <h1>app staring</h1>
      {/* <button onClick={() => setMassage(!massage)}>{massage ? "Hide" : "Show"}</button>
      {massage && <MassagesLife />} */}
      {/* Uncomment only what you want to render */}
      {/* <Massage1 /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Toggle /> */}
      {/* <InputExample /> */}
      {/* <Profile /> */}
      {/* <User /> */}
      {/* <Fruits /> */}
      {/* <ArrayState /> */}
      {/* <EmployeeState /> */}
      {/* <UserGreeting /> */}/{/* <Form /> */}
      {/* <LogInForm /> */}
      {/* <LargeForm /> */}
      {/* <LogInForm2 /> */}
      {/* <Life3 />
      <Life3 /> */}
      {/* <Life3 /> */}
      {/* <MassagesLife /> */}

      <UserEffect1 />
    </>
  );
}

export default App;
