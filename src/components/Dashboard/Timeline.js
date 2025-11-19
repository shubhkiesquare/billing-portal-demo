import React, { useState, useEffect } from 'react';
import './Timeline.css';

const Timeline = ({ timeline }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({});

  // Calculate time remaining for active steps
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const remaining = {};
      timeline.forEach(item => {
        if (item.status === 'active') {
          // Simulate time calculation based on progress
          const progress = parseInt(item.description.match(/(\d+)%/)?.[1] || 0);
          const totalMinutes = 120; // Assume 2 hours total
          const minutesRemaining = Math.round((totalMinutes * (100 - progress)) / 100);
          remaining[item.id] = minutesRemaining;
        }
      });
      setTimeRemaining(remaining);
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timeline]);

  const getProgress = (item) => {
    if (item.status === 'completed') return 100;
    if (item.status === 'active') {
      // Extract progress from description
      const match = item.description.match(/(\d+)%/);
      return match ? parseInt(match[1]) : 0;
    }
    return 0;
  };

  const formatTimeRemaining = (minutes) => {
    if (minutes < 60) return `${minutes} min remaining`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m remaining`;
  };

  const getDetailedInfo = (item) => {
    const details = {
      1: {
        tasks: ['Collect EB Billing Data', 'Collect EB Provision Data', 'Collect Cost Site Data'],
        dependencies: [],
        assignedTo: ['Manoj Pandey', 'Nilesh Luhadiya'],
        estimatedDuration: '4 days',
        actualDuration: '4 days',
        completionDate: '29th Nov 2024, 5:30 PM'
      },
      2: {
        tasks: ['Load data into system', 'Validate PTM mapping', 'Apply allocation rules', 'Generate allocation report'],
        dependencies: ['Data Collection Phase'],
        assignedTo: ['System Automated'],
        estimatedDuration: '2 hours',
        actualDuration: 'In Progress',
        completionDate: 'Expected: 1st Dec 2024, 10:00 AM'
      },
      3: {
        tasks: ['Calculate OPCO share (80%)', 'Calculate ISQ share (20%)', 'Apply business rules', 'Validate totals'],
        dependencies: ['OPCO Allocation'],
        assignedTo: ['System Automated'],
        estimatedDuration: '30 minutes',
        actualDuration: 'Pending',
        completionDate: 'Expected: 1st Dec 2024, 10:30 AM'
      },
      4: {
        tasks: ['Merge all data sources', 'Remove duplicates', 'Apply transformations', 'Quality checks'],
        dependencies: ['Cost Split (80-20)'],
        assignedTo: ['System Automated'],
        estimatedDuration: '45 minutes',
        actualDuration: 'Pending',
        completionDate: 'Expected: 1st Dec 2024, 11:15 AM'
      },
      5: {
        tasks: ['Generate P&L structure', 'Apply accounting rules', 'Calculate variances', 'Create visualizations'],
        dependencies: ['Data Consolidation'],
        assignedTo: ['System Automated'],
        estimatedDuration: '1 hour',
        actualDuration: 'Pending',
        completionDate: 'Expected: 1st Dec 2024, 12:15 PM'
      },
      6: {
        tasks: ['Final validation', 'Generate email notifications', 'Send to stakeholders', 'Archive report'],
        dependencies: ['P&L Report Generation'],
        assignedTo: ['System Automated'],
        estimatedDuration: '15 minutes',
        actualDuration: 'Pending',
        completionDate: 'Expected: 1st Dec 2024, 12:30 PM'
      }
    };
    return details[item.id] || {};
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="card timeline-card">
        <div className="card-header">
          <h2 className="card-title">
            <i className="fas fa-tasks"></i> Process Timeline
          </h2>
          <span className="timeline-subtitle">Click on any step for detailed information</span>
        </div>
        <div className="card-body">
          <div className="timeline">
            {timeline.map(item => {
              const progress = getProgress(item);
              return (
                <div 
                  key={item.id} 
                  className={`timeline-item ${item.status} ${item.status !== 'pending' ? 'clickable' : ''}`}
                  onClick={() => item.status !== 'pending' && handleItemClick(item)}
                >
                  <div className="timeline-marker">
                    {item.status === 'completed' && <i className="fas fa-check"></i>}
                    {item.status === 'active' && <i className="fas fa-spinner fa-spin"></i>}
                    {item.status === 'pending' && <i className="fas fa-hourglass-half"></i>}
                  </div>
                  
                  {/* Progress Ring for Active Items */}
                  {item.status === 'active' && (
                    <div className="progress-ring">
                      <svg width="50" height="50">
                        <circle
                          className="progress-ring-circle"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="transparent"
                          r="20"
                          cx="25"
                          cy="25"
                          style={{
                            strokeDasharray: `${2 * Math.PI * 20}`,
                            strokeDashoffset: `${2 * Math.PI * 20 * (1 - progress / 100)}`
                          }}
                        />
                      </svg>
                      <span className="progress-text">{progress}%</span>
                    </div>
                  )}

                  <div className="timeline-content">
                    <div className="timeline-title">
                      {item.title}
                      {item.status !== 'pending' && (
                        <i className="fas fa-info-circle timeline-info-icon"></i>
                      )}
                    </div>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-description">{item.description}</div>
                    
                    {/* Progress Bar */}
                    {progress > 0 && (
                      <div className="timeline-progress">
                        <div className="timeline-progress-bar" style={{ width: `${progress}%` }}>
                          <span className="timeline-progress-text">{progress}%</span>
                        </div>
                      </div>
                    )}

                    {/* Time Remaining for Active Steps */}
                    {item.status === 'active' && timeRemaining[item.id] && (
                      <div className="timeline-eta">
                        <i className="fas fa-clock"></i> {formatTimeRemaining(timeRemaining[item.id])}
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className={`timeline-badge ${item.status}`}>
                      {item.status === 'completed' && 'Completed'}
                      {item.status === 'active' && 'In Progress'}
                      {item.status === 'pending' && 'Scheduled'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="timeline-modal-overlay" onClick={closeModal}>
          <div className="timeline-modal" onClick={(e) => e.stopPropagation()}>
            <div className="timeline-modal-header">
              <h3>
                <i className={`fas ${selectedItem.status === 'completed' ? 'fa-check-circle' : 'fa-spinner'}`}></i>
                {selectedItem.title}
              </h3>
              <button className="timeline-modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="timeline-modal-body">
              {/* Status and Progress Section */}
              <div className="timeline-modal-section">
                <div className="timeline-modal-status">
                  <div className="status-item">
                    <span className="status-label">Status:</span>
                    <span className={`status-badge ${selectedItem.status}`}>
                      {selectedItem.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">Progress:</span>
                    <span className="status-value">{getProgress(selectedItem)}%</span>
                  </div>
                  {selectedItem.status === 'active' && timeRemaining[selectedItem.id] && (
                    <div className="status-item">
                      <span className="status-label">Time Remaining:</span>
                      <span className="status-value">{formatTimeRemaining(timeRemaining[selectedItem.id])}</span>
                    </div>
                  )}
                </div>

                {/* Visual Progress Bar */}
                <div className="modal-progress-bar-container">
                  <div className="modal-progress-bar" style={{ width: `${getProgress(selectedItem)}%` }}></div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="timeline-modal-section">
                <h4><i className="fas fa-info-circle"></i> Details</h4>
                <div className="timeline-modal-info">
                  <div className="info-row">
                    <span className="info-label">Date Range:</span>
                    <span className="info-value">{selectedItem.date}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Assigned To:</span>
                    <span className="info-value">{getDetailedInfo(selectedItem).assignedTo?.join(', ')}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Estimated Duration:</span>
                    <span className="info-value">{getDetailedInfo(selectedItem).estimatedDuration}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Actual Duration:</span>
                    <span className="info-value">{getDetailedInfo(selectedItem).actualDuration}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Completion:</span>
                    <span className="info-value">{getDetailedInfo(selectedItem).completionDate}</span>
                  </div>
                </div>
              </div>

              {/* Tasks Section */}
              <div className="timeline-modal-section">
                <h4><i className="fas fa-tasks"></i> Tasks</h4>
                <ul className="timeline-modal-tasks">
                  {getDetailedInfo(selectedItem).tasks?.map((task, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> {task}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dependencies Section */}
              {getDetailedInfo(selectedItem).dependencies?.length > 0 && (
                <div className="timeline-modal-section">
                  <h4><i className="fas fa-link"></i> Dependencies</h4>
                  <div className="timeline-modal-dependencies">
                    {getDetailedInfo(selectedItem).dependencies.map((dep, index) => (
                      <span key={index} className="dependency-badge">
                        <i className="fas fa-arrow-left"></i> {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="timeline-modal-footer">
              <button className="btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;