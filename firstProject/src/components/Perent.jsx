import Child from "./Child";
function Perent() {
  function hello() {
    alert("hello from parent");
  }
  return (
    <div>
      <h1>Perent Component</h1>
      <button onClick={hello}>Greet Parent</button>
    </div>
  );
}
export default Perent;
