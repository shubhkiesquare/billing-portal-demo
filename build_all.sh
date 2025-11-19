#!/bin/bash

echo "Building all remaining components..."

# FilterBar Component
cat > src/components/Dashboard/FilterBar.js << 'EOF'
import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, onFilterChange, onApply, onReset }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Processing Month</label>
        <select 
          className="filter-select"
          value={filters.month}
          onChange={(e) => onFilterChange('month', e.target.value)}
        >
          <option>November 2024</option>
          <option>October 2024</option>
          <option>September 2024</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label className="filter-label">Status Filter</label>
        <select 
          className="filter-select"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
          <option value="processing">Processing</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label className="filter-label">Team Filter</label>
        <select 
          className="filter-select"
          value={filters.team}
          onChange={(e) => onFilterChange('team', e.target.value)}
        >
          <option value="all">All Teams</option>
          <option value="AP Team">AP Team</option>
          <option value="AR Team">AR Team</option>
          <option value="Billing Team">Revenue-Billing Team</option>
          <option value="System">System Automated</option>
        </select>
      </div>

      <div style={{display: 'flex', alignItems: 'flex-end', gap: '12px'}}>
        <button className="btn btn-primary" onClick={onApply}>
          <i className="fas fa-filter"></i> Apply Filters
        </button>
        <button className="btn btn-secondary" onClick={onReset}>
          <i className="fas fa-redo"></i> Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
EOF

cat > src/components/Dashboard/FilterBar.css << 'EOF'
.filter-bar {
  background: white;
  padding: 20px 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 200px;
}

.filter-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-700);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-select {
  padding: 10px 14px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.4);
}

.btn-secondary {
  background: var(--gray-200);
  color: var(--gray-700);
}

.btn-secondary:hover {
  background: var(--gray-300);
}
EOF

echo "✅ FilterBar created"

# Continue with more components...
