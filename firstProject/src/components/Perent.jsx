import Child from "./Child";

function Parent() {
  // function greetParent() {
  //   alert("Hello from Parent");
  // }

  // function greetChild() {
  //   alert("Hello from Child");
  // }

  // pass as object
  // create an object and pass it as prop to Child
  const Employee = {
    name1: "John Doe",
    lastname: "Smith",
    position: "Software Engineer",
  };
  return (
    <div>
      <h1>Parent Component</h1>

      {/* Parent calling its own function
      <button onClick={greetParent}>Parent Greet</button>

      {/* Passing function to Child */}
      {/* <Child greetChild={greetChild} /> */}

      {/* Passing object as prop to Child */}
      <Child employee={Employee} />
    </div>
  );
}

export default Parent;
