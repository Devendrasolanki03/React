// import Parent from "./Perent";
// function Child(props) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       {/*
//       {/* Child calling Parent function */}
//       {/* <button onClick={greetChild}>Child Greet Parent</button>  */}

//       {/* Receiving object as prop */}
//       <h3>Employee Details:</h3>
//       <p>Name: {props.employee.name1}</p>
//       <p>Last Name: {props.employee.lastname}</p>
//       <p>Position: {props.employee.position}</p>
//     </div>
//   );
// }

// export default Child;

// get object via destructuring
function Child({ employee }) {
  return (
    <div>
      <h2>Child Component</h2>

      <h3>Employee Details:</h3>
      <p>Name: {employee?.name1}</p>
      <p>Last Name: {employee?.lastname}</p>
      <p>Position: {employee?.position}</p>
    </div>
  );
}

export default Child;
