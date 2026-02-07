export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Task Management System</h1>
      <p>A full-stack application for managing tasks</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Features:</h2>
        <ul>
          <li>Create, read, update, delete tasks</li>
          <li>Backend API with Express.js</li>
          <li>Frontend with Next.js</li>
          <li>TypeScript for type safety</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h3>Backend Status:</h3>
        <p>API running on: <a href="http://localhost:5000/api/tasks">http://localhost:5000/api/tasks</a></p>
      </div>
    </main>
  );
}
