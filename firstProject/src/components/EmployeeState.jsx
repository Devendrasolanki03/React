import { useState } from "react";

function EmployeeState() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "dev", departmetn: "IT", salary: 555000 },
    { id: 2, name: "Raj", departmetn: "HR", salary: 75000 },
    { id: 3, name: "Ravi", departmetn: "CSE", salary: 835000 },
  ]);

  const addEmployee = () => {
    if (employees.trim() != "") return;
    setEmployees([...employees]);
  };

  return (
    <>
      <h4>Employe details</h4>
      <table border={1} color="red">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.departmetn}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default EmployeeState;
