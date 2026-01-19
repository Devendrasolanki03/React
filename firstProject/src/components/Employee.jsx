// function Employee(Props) {
//   return (
//     <>
//       <h1>Employee Component</h1>
//       This is Employee Component
//       <h1>name is {Props.name}</h1>
//       <h1>lastname is {Props.lastname}</h1>
//       <h1>role is {Props.role}</h1>
//     </>
//   );
// }

// export default Employee;
// defining default props using destructuring
// function Employee({ name = "dev", lastname, role }) {
//   return (
//     <>
//       <h1>Employee Component</h1>
//       This is Employee Component
//       <h1>name is {name}</h1>
//       <h1>lastname is {lastname}</h1>
//       <h1>role is {role}</h1>
//       <h1>name is {name}</h1>
//     </>
//   );
// }
// export default Employee;

// destructuring in the parameter and default props
function Employee(props) {
  const {
    name = "dev",
    lastname = "default last",
    role = "default role",
  } = props;
  return (
    <>
      <h1>Employee Component</h1>
      This is Employee Component
      <h1>
        name is {name} lastname is {lastname} role is {role}
      </h1>
    </>
  );
}
export default Employee;
