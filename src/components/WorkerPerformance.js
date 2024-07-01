// src/components/WorkerPerformance.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkerPerformance() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // Fetch worker performance data from the API
    axios.get('http://localhost:5000/api/workers')
      .then(response => {
        setWorkers(response.data);
      })
      .catch(error => {
        console.error('Error fetching worker performance data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Worker Performance</h2>
      <ul>
        {workers.map(worker => (
          <li key={worker.id}>{worker.name}: {worker.performance}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkerPerformance;
