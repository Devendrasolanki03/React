import { Component } from "react";
// class UserGreeting extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>welcome user</div>;
//     } else {
//       return <div>pls log in </div>;
//     }
//   }
// }
//03
//import { useState } from "react";

// function UserGreeting(){
//   const[isLoggedIn , setIsLoggedIn]=useState(false);
//   if (isLoggedIn) {
//     return(
//       <div>welcome User</div>
//     )

//   }
//   else{
//     return(
//       <div>please log in </div>
//     )
//   }
// }

//03
// class UserGreeting extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//     };
//   }
//   render() {
//     let massage;
//     if (this.state.isLoggedIn) {
//       massage = <div>welcome user</div>;
//     } else {
//       massage = <div>pls log in </div>;
//     }
//     return massage;
//   }
// }
//04
import { useState } from "react";

function UserGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <h1>welcome user</h1> : <h2>please log in again</h2>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "LogOut" : "Login"}
      </button>
    </div>
  );
}
export default UserGreeting;
