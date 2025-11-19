import React from 'react';
import './Timeline.css';

const Timeline = ({ timeline }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <i className="fas fa-tasks"></i> Process Timeline
        </h2>
      </div>
      <div className="card-body">
        <div className="timeline">
          {timeline.map(item => (
            <div key={item.id} className={`timeline-item ${item.status}`}>
              <div className="timeline-marker">
                {item.status === 'completed' && <i className="fas fa-check"></i>}
                {item.status === 'active' && <i className="fas fa-spinner fa-spin"></i>}
                {item.status === 'pending' && <i className="fas fa-hourglass-half"></i>}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;