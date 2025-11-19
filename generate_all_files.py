#!/usr/bin/env python3

import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f"✅ Created: {path}")

# Base path
src = "src/components"

# Timeline Component
write_file(f"{src}/Dashboard/Timeline.js", '''import React from 'react';
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

export default Timeline;''')

write_file(f"{src}/Dashboard/Timeline.css", '''.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gray-200);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-marker {
  position: absolute;
  left: -29px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 1;
}

.timeline-item.completed .timeline-marker {
  background: var(--success);
  border-color: var(--success);
  color: white;
}

.timeline-item.active .timeline-marker {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  animation: pulse 2s infinite;
}

.timeline-content {
  background: var(--gray-50);
  padding: 16px;
  border-radius: 8px;
  border-left: 3px solid var(--gray-300);
}

.timeline-item.completed .timeline-content {
  border-color: var(--success);
}

.timeline-item.active .timeline-content {
  border-color: var(--primary);
  background: #eff6ff;
}

.timeline-title {
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 4px;
  font-size: 15px;
}

.timeline-date {
  font-size: 12px;
  color: var(--gray-500);
  margin-bottom: 8px;
}

.timeline-description {
  font-size: 13px;
  color: var(--gray-600);
}''')

# AlertsPanel Component
write_file(f"{src}/Dashboard/AlertsPanel.js", '''import React from 'react';
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

export default AlertsPanel;''')

write_file(f"{src}/Dashboard/AlertsPanel.css", '''.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-left: 4px solid;
}

.alert-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 14px;
}

.alert-message {
  font-size: 13px;
  color: var(--gray-700);
  margin-bottom: 4px;
}

.alert-time {
  font-size: 11px;
  color: var(--gray-500);
  font-style: italic;
}

.alert.danger {
  background: #fef2f2;
  border-color: var(--danger);
}

.alert.danger .alert-icon {
  color: var(--danger);
}

.alert.warning {
  background: #fffbeb;
  border-color: var(--warning);
}

.alert.warning .alert-icon {
  color: var(--warning);
}

.alert.success {
  background: #f0fdf4;
  border-color: var(--success);
}

.alert.success .alert-icon {
  color: var(--success);
}

.alert.info {
  background: #eff6ff;
  border-color: var(--info);
}

.alert.info .alert-icon {
  color: var(--info);
}''')

# UploadModal Component
write_file(f"{src}/common/UploadModal.js", '''import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadModal.css';
import { formatFileSize, validateFileType, validateFileSize } from '../../utils/helpers';

const UploadModal = ({ category, onClose, onSubmit }) => {
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState('');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/csv': ['.csv'],
      'text/plain': ['.txt']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    }
  });

  const handleSubmit = () => {
    if (!file) {
      alert('Please select a file');
      return;
    }
    onSubmit(file, comments);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">
              <i className="fas fa-upload"></i> Upload Data File
            </h3>
            <button className="modal-close" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label className="form-label">Data Category</label>
              <input
                type="text"
                className="form-control"
                value={category?.name || ''}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Upload File <span style={{color: 'var(--danger)'}}>*</span>
              </label>
              <div {...getRootProps()} className={`file-upload-area ${isDragActive ? 'dragover' : ''}`}>
                <input {...getInputProps()} />
                <div className="file-upload-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <div className="file-upload-text">Drag and drop your file here</div>
                <div className="file-upload-hint">or click to browse (Excel, CSV, TXT - Max 50MB)</div>
              </div>

              {file && (
                <div className="file-info">
                  <div className="file-details">
                    <i className="fas fa-file-excel file-icon-large"></i>
                    <div>
                      <div className="file-name">{file.name}</div>
                      <div className="file-size">{formatFileSize(file.size)}</div>
                    </div>
                    <button onClick={() => setFile(null)} className="file-remove">
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Comments (Optional)</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Add any relevant notes or comments about this upload..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>

            <div className="alert info">
              <div className="alert-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="alert-content">
                <div className="alert-title">File Validation</div>
                <div className="alert-message">
                  Your file will be automatically validated for format, schema, and data integrity.
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              <i className="fas fa-times"></i> Cancel
            </button>
            <button className="btn btn-success" onClick={handleSubmit} disabled={!file}>
              <i className="fas fa-check"></i> Upload & Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;''')

write_file(f"{src}/common/UploadModal.css", '''.modal {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 20px;
  overflow-y: auto;
}

.modal-dialog {
  width: 100%;
  max-width: 700px;
  animation: slideDown 0.3s;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  overflow: hidden;
}

.modal-header {
  padding: 24px;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-50);
}

.modal-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--secondary);
  display: flex;
  align-items: center;
  gap: 10px;
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  color: var(--gray-500);
  transition: all 0.2s;
}

.modal-close:hover {
  background: var(--gray-200);
  color: var(--gray-900);
}

.modal-body {
  padding: 24px;
  max-height: 600px;
  overflow-y: auto;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--gray-200);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: var(--gray-50);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--gray-700);
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.file-upload-area {
  border: 2px dashed var(--gray-300);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--gray-50);
}

.file-upload-area:hover {
  border-color: var(--primary);
  background: #eff6ff;
}

.file-upload-area.dragover {
  border-color: var(--primary);
  background: #dbeafe;
}

.file-upload-icon {
  font-size: 48px;
  color: var(--primary);
  margin-bottom: 16px;
}

.file-upload-text {
  font-size: 16px;
  color: var(--gray-700);
  margin-bottom: 8px;
  font-weight: 500;
}

.file-upload-hint {
  font-size: 13px;
  color: var(--gray-500);
}

.file-info {
  margin-top: 12px;
}

.file-details {
  background: #eff6ff;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.file-icon-large {
  font-size: 32px;
  color: var(--success);
}

.file-name {
  font-weight: 600;
  color: var(--secondary);
}

.file-size {
  font-size: 13px;
  color: var(--gray-500);
}

.file-remove {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--danger);
  font-size: 20px;
  transition: transform 0.2s;
}

.file-remove:hover {
  transform: scale(1.1);
}

.btn-success {
  background: var(--success);
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #047857;
}

.btn-success:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}''')

print("\n✅ All Dashboard components created successfully!")
