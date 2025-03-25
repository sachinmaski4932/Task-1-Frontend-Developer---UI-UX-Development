import React from 'react';
import './App.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="card-container">
        <div className="card">Users Management</div>
        <div className="card">Products Overview</div>
      </div>
    </div>
  );
}

export default Dashboard;
