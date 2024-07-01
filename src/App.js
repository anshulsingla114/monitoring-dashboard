// src/App.js
import React from 'react';
import TaskStatus from './components/TaskStatus';
import WorkerPerformance from './components/WorkerPerformance';

function App() {
  return (
    <div className="App">
      <h1>Monitoring Dashboard</h1>
      <TaskStatus />
      <WorkerPerformance />
    </div>
  );
}

export default App;
