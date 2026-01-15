import Perent from "./Perent";
function Child(props) {
  function greetParent() {
    alert("hello from child");
  }

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
}
export default Child;
