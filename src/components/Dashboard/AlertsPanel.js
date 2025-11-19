import React from 'react';
import './AlertsPanel.css';
import { getTimeAgo } from '../../utils/helpers';

const AlertsPanel = ({ notifications }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <i className="fas fa-bell"></i> Alerts & Notifications
        </h2>
      </div>
      <div className="card-body">
        {notifications.slice(0, 4).map(notif => (
          <div key={notif.id} className={`alert ${notif.type}`}>
            <div className="alert-icon">
              {notif.type === 'danger' && <i className="fas fa-exclamation-circle"></i>}
              {notif.type === 'warning' && <i className="fas fa-clock"></i>}
              {notif.type === 'success' && <i className="fas fa-check-circle"></i>}
              {notif.type === 'info' && <i className="fas fa-info-circle"></i>}
            </div>
            <div className="alert-content">
              <div className="alert-title">{notif.title}</div>
              <div className="alert-message">{notif.message}</div>
              <div className="alert-time">{getTimeAgo(notif.timestamp)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;