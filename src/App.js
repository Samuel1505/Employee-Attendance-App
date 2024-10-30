import React, { useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Present');

  const handleAddEmployee = () => {
    if (id.trim() !== '' && name.trim() !== '') {
      setEmployees([...employees, { id, name, status }]);
      setId(''); // Reset ID field
      setName(''); // Reset name field
      setStatus('Present'); // Reset status field
    }
  };

  return (
    <div className="App">
      <h1>Employee Attendance Tracker</h1>
      
      <div className="form">
        <input 
          type="text" 
          placeholder="Employee ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Employee Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="On Leave">On Leave</option>
        </select>
        
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
      
      <div className="attendance-list">
        <h2>Attendance List</h2>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
