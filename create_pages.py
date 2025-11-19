#!/usr/bin/env python3

import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f"✅ {path}")

src = "src/components"

# UploadData Page
write_file(f"{src}/UploadData/UploadData.js", '''import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './UploadData.css';
import { uploadCategories } from '../../data/mockData';
import UploadModal from '../common/UploadModal';

const UploadData = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleUploadSubmit = (file, comments) => {
    toast.success(`File uploaded successfully for: ${selectedCategory.name}`);
    setShowModal(false);
  };

  return (
    <div className="upload-page fade-in">
      <div className="page-header">
        <h1 className="page-title">Upload Data</h1>
        <p className="page-subtitle">Upload required files for monthly billing cycle</p>
      </div>

      <div className="upload-grid">
        {uploadCategories.map(category => (
          <div key={category.id} className="upload-card">
            <div className="upload-card-header">
              <div className="upload-icon">
                <i className="fas fa-file-upload"></i>
              </div>
              <div>
                <h3>{category.name}</h3>
                <p>{category.responsible} - {category.team}</p>
              </div>
            </div>
            <div className="upload-card-body">
              <div className="info-row">
                <span>Deadline:</span>
                <strong>{category.deadline}th of month</strong>
              </div>
              <div className="info-row">
                <span>Status:</span>
                <span className={`status-badge ${category.status}`}>
                  {category.status}
                </span>
              </div>
            </div>
            <div className="upload-card-footer">
              <button 
                className="btn btn-primary"
                onClick={() => handleUploadClick(category)}
              >
                <i className="fas fa-upload"></i> Upload File
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <UploadModal
          category={selectedCategory}
          onClose={() => setShowModal(false)}
          onSubmit={handleUploadSubmit}
        />
      )}
    </div>
  );
};

export default UploadData;''')

write_file(f"{src}/UploadData/UploadData.css", '''.upload-page {
  animation: fadeIn 0.5s ease;
}

.upload-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.upload-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.upload-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.upload-card-header {
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border-bottom: 1px solid var(--gray-200);
}

.upload-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent), var(--primary));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  flex-shrink: 0;
}

.upload-card-header h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--secondary);
}

.upload-card-header p {
  font-size: 13px;
  color: var(--gray-500);
}

.upload-card-body {
  padding: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.upload-card-footer {
  padding: 16px 20px;
  background: var(--gray-50);
  border-top: 1px solid var(--gray-200);
}

.upload-card-footer .btn {
  width: 100%;
}''')

# Reports Page  
write_file(f"{src}/Reports/Reports.js", '''import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Reports.css';
import { reports, chartData } from '../../data/mockData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleDownload = (report) => {
    toast.success(`Downloading: ${report.name}`);
  };

  const handleGenerate = () => {
    toast.info('Generating new report...');
  };

  return (
    <div className="reports-page fade-in">
      <div className="page-header">
        <h1 className="page-title">Reports & Analytics</h1>
        <p className="page-subtitle">View historical reports and generate new ones</p>
      </div>

      <div className="reports-actions">
        <button className="btn btn-primary" onClick={handleGenerate}>
          <i className="fas fa-plus"></i> Generate New Report
        </button>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Monthly Completion Trend</h2>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData.monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completion" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="onTime" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Team Performance</h2>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.teamPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="team" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#10b981" />
                <Bar dataKey="pending" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Report History</h2>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Generated Date</th>
                <th>Generated By</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td><strong>{report.name}</strong></td>
                  <td>{report.type}</td>
                  <td>{new Date(report.generatedDate).toLocaleString()}</td>
                  <td>{report.generatedBy}</td>
                  <td>{report.size}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => handleDownload(report)}
                    >
                      <i className="fas fa-download"></i> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;''')

write_file(f"{src}/Reports/Reports.css", '''.reports-page {
  animation: fadeIn 0.5s ease;
}

.reports-actions {
  margin-bottom: 30px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}''')

# Configuration Page
write_file(f"{src}/Configuration/Configuration.js", '''import React, { useState } from 'react';
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

export default Configuration;''')

write_file(f"{src}/Configuration/Configuration.css", '''.config-page {
  animation: fadeIn 0.5s ease;
}

.config-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  background: white;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.tab {
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: var(--gray-600);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tab:hover {
  background: var(--gray-50);
  color: var(--primary);
}

.tab.active {
  background: var(--primary);
  color: white;
}

.config-content {
  animation: fadeIn 0.3s ease;
}''')

print("\n✅ All page components created successfully!")
