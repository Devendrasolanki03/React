import Child from "./Child";

function Parent() {
  function greetParent() {
    alert("Hello from Parent");
  }

  function greetChild() {
    alert("Hello from Child");
  }

  return (
    <div>
      <h1>Parent Component</h1>

      {/* Parent calling its own function */}
      <button onClick={greetParent}>Parent Greet</button>

      {/* Passing function to Child */}
      <Child greetChild={greetChild} />
    </div>
  );
}

export default Parent;
