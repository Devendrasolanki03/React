function Employee(Props) {
  return (
    <>
      <h1>Employee Component</h1>
      This is Employee Component
      <h1>name is {Props.name}</h1>
      <h1>lastname is {Props.lastname}</h1>
      <h1>role is {Props.role}</h1>
    </>
  );
}

export default Employee;
