import React from 'react';
import './StatsCards.css';

const StatsCards = ({ stats }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-label">Completed Tasks</div>
            <div className="stat-value">{stats.completed}/{stats.total}</div>
            <div className="stat-change positive">
              <i className="fas fa-arrow-up"></i> {stats.completionRate}% Complete
            </div>
          </div>
          <div className="stat-icon success">
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-label">Pending Actions</div>
            <div className="stat-value">{stats.pending}</div>
            <div className="stat-change">
              Due by 1st Dec 2024
            </div>
          </div>
          <div className="stat-icon warning">
            <i className="fas fa-clock"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-label">Overdue Items</div>
            <div className="stat-value">{stats.overdue}</div>
            <div className="stat-change negative">
              <i className="fas fa-exclamation-triangle"></i> Needs Attention
            </div>
          </div>
          <div className="stat-icon danger">
            <i className="fas fa-exclamation-circle"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-label">Process Efficiency</div>
            <div className="stat-value">{stats.completionRate}%</div>
            <div className="stat-change positive">
              <i className="fas fa-arrow-up"></i> +15% vs Last Month
            </div>
          </div>
          <div className="stat-icon info">
            <i className="fas fa-tachometer-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
