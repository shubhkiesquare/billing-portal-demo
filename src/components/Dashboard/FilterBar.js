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