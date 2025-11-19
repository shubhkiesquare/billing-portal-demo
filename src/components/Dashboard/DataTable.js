import React from 'react';
import './DataTable.css';
import { formatDate, getStatusIcon } from '../../utils/helpers';

const DataTable = ({ data, onUploadClick, onViewDetails, onViewFile, onRefresh, onExport }) => {
  const getStatusBadge = (status) => {
    const badges = {
      completed: 'completed',
      pending: 'pending',
      overdue: 'overdue',
      processing: 'processing'
    };
    return badges[status] || 'pending';
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <i className="fas fa-database"></i> Data Upload Management
        </h2>
        <div style={{display: 'flex', gap: '12px'}}>
          <button className="btn btn-sm btn-secondary" onClick={onRefresh}>
            <i className="fas fa-sync-alt"></i> Refresh
          </button>
          <button className="btn btn-sm btn-primary" onClick={onExport}>
            <i className="fas fa-download"></i> Export
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="progress-container">
          <div className="progress-header">
            <span>Overall Completion</span>
            <span>80%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '80%'}}></div>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Data Category</th>
              <th>Responsible</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} onClick={() => onViewDetails(item)} 
                  style={item.status === 'overdue' ? {background: '#fef2f2'} : {}}>
                <td><strong>{item.name}</strong></td>
                <td>{item.responsible} ({item.team})</td>
                <td>{item.deadline}{item.deadline === 1 ? 'st' : item.deadline === 25 ? 'th' : 'th'} {item.deadline <= 1 ? 'Dec' : 'Nov'} 2024</td>
                <td>
                  <span className={`status-badge ${getStatusBadge(item.status)}`}>
                    <span className="status-icon"></span>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    {item.status === 'processing' && item.progress ? ` (${item.progress}%)` : ''}
                  </span>
                </td>
                <td>{formatDate(item.uploadDate)}</td>
                <td>
                  {item.status === 'overdue' ? (
                    <button className="btn btn-sm btn-danger" 
                            onClick={(e) => { e.stopPropagation(); onUploadClick(item); }}>
                      <i className="fas fa-upload"></i> Upload Now
                    </button>
                  ) : item.status === 'completed' ? (
                    <button className="btn btn-sm btn-secondary"
                            onClick={(e) => onViewFile(e, item.id)}>
                      <i className="fas fa-eye"></i> View
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-secondary" disabled>
                      <i className="fas fa-hourglass-half"></i> Waiting
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;