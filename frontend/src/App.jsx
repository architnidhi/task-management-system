import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ backgroundColor: '#0070f3', color: 'white', padding: '1rem', borderRadius: '8px' }}>
        <h1>Task Management System</h1>
        <p>Full-stack application with React frontend and Express.js backend</p>
      </header>
      
      <main style={{ marginTop: '2rem' }}>
        <h2>Task List</h2>
        
        {loading ? (
          <p>Loading tasks from backend...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks found or backend not running.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map(task => (
              <li key={task.id} style={{ 
                padding: '1rem', 
                margin: '0.5rem 0', 
                backgroundColor: task.completed ? '#e8f5e9' : '#fff3e0',
                borderLeft: `4px solid ${task.completed ? '#4caf50' : '#ff9800'}`,
                borderRadius: '4px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    readOnly
                    style={{ marginRight: '1rem' }}
                  />
                  <div>
                    <strong>{task.title}</strong>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      Status: {task.completed ? '✅ Completed' : '⏳ Pending'}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3>Backend Connection</h3>
          <p>API Endpoint: <a href="http://localhost:5000/api/tasks" target="_blank">http://localhost:5000/api/tasks</a></p>
          <p>Tasks loaded: <strong>{tasks.length}</strong></p>
          <p>Backend status: {loading ? 'Connecting...' : tasks.length > 0 ? '✅ Connected' : '❌ Not connected'}</p>
        </div>
      </main>
      
      <footer style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
        <p>Task Management System • React Frontend • Express.js Backend</p>
      </footer>
    </div>
  );
}

export default App;
