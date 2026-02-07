import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Learn Git', completed: true },
    { id: 2, title: 'Build Task Manager', completed: false }
  ]);
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost: + $ + {PORT});
});
