import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Configuration.css';
import { users, systemConfig } from '../../data/mockData';

const Configuration = () => {
  const [activeTab, setActiveTab] = useState('users');

  const handleSave = () => {
    toast.success('Configuration saved successfully');
  };

  return (
    <div className="config-page fade-in">
      <div className="page-header">
        <h1 className="page-title">System Configuration</h1>
        <p className="page-subtitle">Manage users, teams, deadlines, and system settings</p>
      </div>

      <div className="config-tabs">
        <button 
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <i className="fas fa-users"></i> Users & Teams
        </button>
        <button 
          className={`tab ${activeTab === 'deadlines' ? 'active' : ''}`}
          onClick={() => setActiveTab('deadlines')}
        >
          <i className="fas fa-calendar"></i> Deadlines
        </button>
        <button 
          className={`tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          <i className="fas fa-envelope"></i> Email Templates
        </button>
        <button 
          className={`tab ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          <i className="fas fa-cog"></i> System Settings
        </button>
      </div>

      <div className="config-content">
        {activeTab === 'users' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">User Management</h2>
              <button className="btn btn-primary">
                <i className="fas fa-plus"></i> Add User
              </button>
            </div>
            <div className="card-body">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td><strong>{user.name}</strong></td>
                      <td>{user.email}</td>
                      <td>{user.team}</td>
                      <td>{user.role}</td>
                      <td>
                        <button className="btn btn-sm btn-secondary">
                          <i className="fas fa-edit"></i> Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'deadlines' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Deadline Configuration</h2>
            </div>
            <div className="card-body">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Deadline (Day of Month)</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {systemConfig.deadlines.map((deadline, index) => (
                    <tr key={index}>
                      <td><strong>{deadline.category}</strong></td>
                      <td>{deadline.day}th</td>
                      <td>{deadline.description}</td>
                      <td>
                        <button className="btn btn-sm btn-secondary">
                          <i className="fas fa-edit"></i> Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Email Templates</h2>
            </div>
            <div className="card-body">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Template Name</th>
                    <th>Subject</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {systemConfig.emailTemplates.map(template => (
                    <tr key={template.id}>
                      <td><strong>{template.name}</strong></td>
                      <td>{template.subject}</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          <i className="fas fa-edit"></i> Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">System Settings</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">OBRM Database Connection</label>
                <input type="text" className="form-control" placeholder="obrm-server.company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Service Provider</label>
                <select className="form-control">
                  <option>SendGrid</option>
                  <option>AWS SES</option>
                  <option>SMTP</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Notification Settings</label>
                <div>
                  <label><input type="checkbox" defaultChecked /> Email Notifications</label><br/>
                  <label><input type="checkbox" defaultChecked /> SMS Notifications</label><br/>
                  <label><input type="checkbox" defaultChecked /> In-App Notifications</label>
                </div>
              </div>
              <button className="btn btn-success" onClick={handleSave}>
                <i className="fas fa-save"></i> Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configuration;