// src/components/TaskStatus.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskStatus() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
    axios.get('http://localhost:5000/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Task Status</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.result}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskStatus;
