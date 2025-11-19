#!/bin/bash

# Create all Dashboard sub-components

# StatsCards.js
cat > src/components/Dashboard/StatsCards.js << 'EOF'
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
EOF

# StatsCards.css
cat > src/components/Dashboard/StatsCards.css << 'EOF'
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 4px solid var(--primary);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.05));
  border-radius: 0 0 0 100px;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;
}

.stat-icon.success {
  background: linear-gradient(135deg, #10b981, #059669);
}

.stat-icon.warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.stat-icon.danger {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.stat-icon.info {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.stat-label {
  font-size: 13px;
  color: var(--gray-500);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--secondary);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-change {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--gray-600);
}

.stat-change.positive {
  color: var(--success);
}

.stat-change.negative {
  color: var(--danger);
}
EOF

echo "✅ StatsCards component created"
