function Child({ greetChild }) {
  return (
    <div>
      <h2>Child Component</h2>

      {/* Child calling Parent function */}
      <button onClick={greetChild}>Child Greet Parent</button>
    </div>
  );
}

export default Child;
